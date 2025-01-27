package com.practise.demo.Service;

import com.practise.demo.Entity.Post;
import com.practise.demo.Exception.DatabaseConnectionException;
import com.practise.demo.Exception.PostNotFoundException;
import com.practise.demo.Repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }


    public List<Post> getAllPosts() {
        try {
            return postRepository.findAllByOrderByCreationDateDesc();
        } catch (Exception e) {
            throw new DatabaseConnectionException("Error occurred while fetching posts from the database.");
        }
    }


    public Post getPostById(Long id) {
        try {
            return postRepository.findById(id)
                    .orElseThrow(() -> new PostNotFoundException("Post with ID " + id + " not found"));
        } catch (Exception e) {
            throw new DatabaseConnectionException("Error occurred while fetching the post from the database.");
        }
    }


    public Post createPost(Post post) {
        return postRepository.save(post);
    }


    public Post updateLikes(Long id) {
        Post post = getPostById(id);  // Get the post
        post.setLikes(post.getLikes() + 1);  // Increment likes
        return postRepository.save(post);  // Save updated post
    }

    public void deletePost(Long id) {
        if (!postRepository.existsById(id)) {
            throw new PostNotFoundException("Cannot delete. Post with ID " + id + " not found");
        }
        postRepository.deleteById(id);
    }

    public Post updatePost(Long id, Post postDetails) {
        Post existingPost = postRepository.findById(id)
                .orElseThrow(() -> new PostNotFoundException("Post with ID " + id + " not found"));

        // Update the post fields
        existingPost.setName(postDetails.getName());
        existingPost.setDescription(postDetails.getDescription());
        existingPost.setImageUrl(postDetails.getImageUrl());
        existingPost.setCreatorName(postDetails.getCreatorName());
        existingPost.setLikes(postDetails.getLikes());

        // Save the updated post
        return postRepository.save(existingPost);
    }
}
