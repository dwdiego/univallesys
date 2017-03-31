package br.com.univallesys.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GrupoDeProdutos {
	
	@Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   private Integer id;
	   private String company_id;
	   private String product_group_id;
	   
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCompany_id() {
		return company_id;
	}
	public void setCompany_id(String company_id) {
		this.company_id = company_id;
	}
	public String getProduct_group_id() {
		return product_group_id;
	}
	public void setProduct_group_id(String product_group_id) {
		this.product_group_id = product_group_id;
	}
	   
	   

}
