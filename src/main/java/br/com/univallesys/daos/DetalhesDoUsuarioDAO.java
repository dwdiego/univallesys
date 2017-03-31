package br.com.univallesys.daos;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
//Implementar para o Spring Security
@Repository
public class DetalhesDoUsuarioDAO implements UserDetailsService
{

   @PersistenceContext
   private EntityManager em;

   @Override
   public UserDetails loadUserByUsername(String username)
         throws UsernameNotFoundException
   {
      throw new UnsupportedOperationException("You should implement the body of this method in order to load users");
   }

}