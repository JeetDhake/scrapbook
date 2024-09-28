package com.example.scrapbook.controller;

import com.example.scrapbook.exception.bookNotFoundException;
import com.example.scrapbook.model.Scrapbooks;
import com.example.scrapbook.repository.ScrapbooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class ScrapbooksController {
    @Autowired
    private ScrapbooksRepository scrapbooksRepository;

    @PostMapping("/scrapbook")
    Scrapbooks newscrapbook(@RequestBody Scrapbooks newScrapbook){
        return scrapbooksRepository.save(newScrapbook);
    }

    @GetMapping("/scrapbooks")
    List<Scrapbooks> getAllScrapbooks(){
        return scrapbooksRepository.findAll();
    }

    @GetMapping("/scrapbook/{id}")
    Scrapbooks getScrapbookById(@PathVariable Long id){
        return scrapbooksRepository.findById(id).orElseThrow(()-> new bookNotFoundException(id));
    }

    @PutMapping("/scrapbook/{id}")
    Scrapbooks updateScrapbook(@RequestBody Scrapbooks newScrapbook, @PathVariable Long id){
        return scrapbooksRepository.findById(id)
                .map(scrapbook ->{
                    scrapbook.setCreator(newScrapbook.getCreator());
                    scrapbook.setTitle(newScrapbook.getTitle());
                    scrapbook.setDescription(newScrapbook.getDescription());
                    return scrapbooksRepository.save(scrapbook);
                }).orElseThrow(()-> new bookNotFoundException(id));

    }
}
