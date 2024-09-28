package com.example.scrapbook.repository;

import com.example.scrapbook.model.Scrapbooks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScrapbooksRepository extends JpaRepository<Scrapbooks, Long> {
}
