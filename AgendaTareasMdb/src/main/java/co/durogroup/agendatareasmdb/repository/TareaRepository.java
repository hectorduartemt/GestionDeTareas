package co.durogroup.agendatareasmdb.repository;

import co.durogroup.agendatareasmdb.model.Tarea;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TareaRepository extends MongoRepository<Tarea, String> {



}
