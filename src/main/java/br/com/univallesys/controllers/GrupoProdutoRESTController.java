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

import br.com.univallesys.daos.GrupoProdutosDAO;
import br.com.univallesys.models.GrupoDeProdutos;

@RestController
@Transactional
@SuppressWarnings({ "rawtypes", "unchecked" })
public class GrupoProdutoRESTController {

	@Autowired
	private GrupoProdutosDAO grupoDao;

	@RequestMapping(method = RequestMethod.GET, value = "/gruposprodutos")
	public List<GrupoDeProdutos> getGrupos() {
		return grupoDao.all();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/grupoproduto/{id}")
	public ResponseEntity getGrupo(@PathVariable("id") Integer id) {

		GrupoDeProdutos grupo = grupoDao.findById(id);
		if (grupo == null) {
			return new ResponseEntity("Não existe grupo para o id:" + id, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity(grupo, HttpStatus.OK);
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/grupoproduto")
	public ResponseEntity createGrupo(@RequestBody GrupoDeProdutos grupo) {

		grupoDao.save(grupo);

		return new ResponseEntity(grupo, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/grupoproduto/{id}")
	public ResponseEntity deleteGrupo(@PathVariable Integer id) {

		GrupoDeProdutos grupo = grupoDao.findById(id);
		if (null == grupo) {
			return new ResponseEntity("Não há grupo com o id:" + id, HttpStatus.NOT_FOUND);
		} else
			grupoDao.remove(grupo);

		return new ResponseEntity(id, HttpStatus.OK);

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/grupoproduto/{id}")
	public ResponseEntity updateGrupo(@PathVariable Integer id, @RequestBody GrupoDeProdutos grupo) {

		GrupoDeProdutos grupoPorId =  grupoDao.findById(id);

		if (null == grupoPorId) {
			return new ResponseEntity("Não há grupo com o id:" + id, HttpStatus.NOT_FOUND);
		} else
			grupoDao.update(grupo);

		return new ResponseEntity(grupo, HttpStatus.OK);
	}


}
