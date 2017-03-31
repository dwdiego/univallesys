package br.com.univallesys.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import br.com.univallesys.models.GrupoDeProdutos;

@Repository
public class GrupoProdutosDAO {
	
	@PersistenceContext
	   private EntityManager manager;

	   public List<GrupoDeProdutos> all()
	   {
	      return manager.createQuery("select g from GrupoDeProdutos g", GrupoDeProdutos.class).getResultList();
	   }

	   public void save(GrupoDeProdutos grupo)
	   {
	      manager.persist(grupo);
	   }

	   public GrupoDeProdutos findById(Integer id)
	   {
	      return manager.find(GrupoDeProdutos.class, id);
	   }

	   public void remove(GrupoDeProdutos grupo)
	   {
	      manager.remove(grupo);
	   }

	   public void update(GrupoDeProdutos grupo)
	   {
	      manager.merge(grupo);
	   }
	  
}
