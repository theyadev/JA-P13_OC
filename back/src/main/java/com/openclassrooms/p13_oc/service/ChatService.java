package com.openclassrooms.p13_oc.service;

import com.openclassrooms.p13_oc.models.Chat;
import com.openclassrooms.p13_oc.repository.ChatRepository;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ChatService {
    private final ChatRepository chatRepository;

    public ChatService(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;
    }

    public Chat findById(Long id) {
        return this.chatRepository.findById(id).orElse(null);
    }

    public Chat create(Chat chat) {
        return this.chatRepository.save(chat);
    }

    public void delete(Long id) {
        this.chatRepository.deleteById(id);
    }
    
    public List<Chat> findByUserId(Long userId) {
        return this.chatRepository.findByUserId(userId);
    }

}
