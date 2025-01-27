package com.practise.demo.Exception;

public class PostNotFoundException extends RuntimeException{
public PostNotFoundException(String message)
{
    super(message);
}
}
