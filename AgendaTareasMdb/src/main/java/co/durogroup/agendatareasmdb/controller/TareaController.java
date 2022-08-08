package co.durogroup.agendatareasmdb.controller;

import co.durogroup.agendatareasmdb.model.Tarea;
import co.durogroup.agendatareasmdb.repository.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/tareas")
public class TareaController {

    @Autowired
    private TareaRepository tareaRepository;

    @GetMapping
    List<Tarea> index(){
        return tareaRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    Tarea create(@RequestBody Tarea tarea){
    return tareaRepository.save(tarea);
    }

    @PutMapping("{id}")
    Tarea update(@PathVariable String id, @RequestBody Tarea tarea){
        Tarea tareaFromDb = tareaRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);

        tareaFromDb.setNombre(tarea.getNombre());
        tareaFromDb.setCompletado(tarea.isCompletado());

        return tareaRepository.save(tareaFromDb);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete(@PathVariable String id){
        Tarea tarea = tareaRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);

        tareaRepository.delete(tarea);
    }
}
