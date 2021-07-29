package fr.ttanesque.rp_site.repository;

import org.springframework.data.repository.CrudRepository;

import fr.ttanesque.rp_site.entity.Player;

public interface PlayerRepository extends CrudRepository<Player, Long> {
    
}
