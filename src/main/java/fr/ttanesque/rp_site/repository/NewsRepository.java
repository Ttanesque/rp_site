package fr.ttanesque.rp_site.repository;

import org.springframework.data.repository.CrudRepository;

import fr.ttanesque.rp_site.entity.News;


public interface NewsRepository extends CrudRepository<News, Long>{

    
}