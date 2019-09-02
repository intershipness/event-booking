package com.springboot.app.Topic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {
	@Autowired
	private TopicRepository EvenimenteRepository;
	

	public List<Topic> getAllEvenimente(){
		List<Topic>topics = new ArrayList<>();
		EvenimenteRepository.findAll().forEach(topics::add);
		return topics;
	}
	public Optional<Topic> getEvenimente(String id) {
		return EvenimenteRepository.findById(id);
	
	}
	public void addEvenimente(Topic topic) {
		EvenimenteRepository.save(topic);
		
	}
	public void updateEvenimente(String id, Topic topic) {
		EvenimenteRepository.save(topic);
}
	public void deleteEvenimente(String id) {
		
		//topics.removeIf(T->T.getId().equals(id));
		EvenimenteRepository.deleteById(id);
	}
}
 