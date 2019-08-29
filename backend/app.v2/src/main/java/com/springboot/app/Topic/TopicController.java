package com.springboot.app.Topic;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicController {
	
	@Autowired
	private TopicService topicservice;
	
	@RequestMapping("/Evenimente")
	public List<Topic> getAllTopics() {
		return   topicservice.getAllEvenimente();
		}
//	@RequestMapping("/topics/{id}")
//	public Optional<Topic> getTopic(@PathVariable String id) {
//		return topicservice.getTopic(id);
//		
//	}
	@RequestMapping(method=RequestMethod.POST,value="/Evenimente")
	public void addTopic(@RequestBody Topic Evenimente) {
		topicservice.addEvenimente(Evenimente);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/Evenimente/{id}")
	public void updateTopic(@RequestBody Topic Evenimente,@PathVariable String id) {
		topicservice.updateEvenimente(id,Evenimente);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/Evenimente/{id}")
	public void deletTopic(@PathVariable String id) {
		 topicservice.deleteEvenimente(id);
		
	}
}