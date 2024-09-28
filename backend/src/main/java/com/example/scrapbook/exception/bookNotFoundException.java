package com.example.scrapbook.exception;

public class bookNotFoundException extends RuntimeException{
    public bookNotFoundException(Long id){
        super("book not found");
    }
}
