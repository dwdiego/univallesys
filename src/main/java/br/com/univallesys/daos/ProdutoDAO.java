package br.com.univallesys.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import br.com.univallesys.models.Produto;

@Repository
public class ProdutoDAO {
	
	@PersistenceContext
	   private EntityManager manager;

	   public List<Produto> all()
	   {
	      return manager.createQuery("select p from Produto p", Produto.class).getResultList();
	   }

	   public void save(Produto produto)
	   {
	      manager.persist(produto);
	   }

	   public Produto findById(Integer id)
	   {
	      return manager.find(Produto.class, id);
	   }

	   public void remove(Produto produto)
	   {
	      manager.remove(produto);
	   }

	   public void update(Produto produto)
	   {
	      manager.merge(produto);
	   }
	  
}
