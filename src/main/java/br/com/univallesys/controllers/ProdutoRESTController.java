package br.com.univallesys.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.univallesys.daos.ProdutoDAO;
import br.com.univallesys.models.Produto;

@RestController
@Transactional
@SuppressWarnings({ "rawtypes", "unchecked" })
public class ProdutoRESTController {

	@Autowired
	private ProdutoDAO produtoDao;

	@RequestMapping(method = RequestMethod.GET, value = "/produtos")
	public List<Produto> getProdutoss() {
		return produtoDao.all();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/produto/{id}")
	public ResponseEntity getProduto(@PathVariable("id") Integer id) {

		Produto produto = produtoDao.findById(id);
		if (produto == null) {
			return new ResponseEntity("Não existe produto para o id:" + id, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity(produto, HttpStatus.OK);
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/produto")
	public ResponseEntity createProduto(@RequestBody Produto produto) {

		produtoDao.save(produto);

		return new ResponseEntity(produto, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/produto/{id}")
	public ResponseEntity deleteProduto(@PathVariable Integer id) {

		Produto produto = produtoDao.findById(id);
		if (null == produto) {
			return new ResponseEntity("Não há produto com o id:" + id, HttpStatus.NOT_FOUND);
		} else
			produtoDao.remove(produto);

		return new ResponseEntity(id, HttpStatus.OK);

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/produto/{id}")
	public ResponseEntity updateProduto(@PathVariable Integer id, @RequestBody Produto produto) {

		Produto produtoPorId =  produtoDao.findById(id);

		if (null == produtoPorId) {
			return new ResponseEntity("Não há produto com o id:" + id, HttpStatus.NOT_FOUND);
		} else
			produtoDao.update(produto);

		return new ResponseEntity(produto, HttpStatus.OK);
	}


}
