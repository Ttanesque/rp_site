package fr.ttanesque.rp_site;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeControlleur {

    @RequestMapping({"/", "/player", "/actualite", "/help"})
    public String index() {
        return "index";
    }
    
}