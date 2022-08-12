package com.humber.bank.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.humber.bank.entity.User;
import com.humber.bank.repository.UserDao;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDao userDao;
	@Override
	public Map<String, String> authenticateUser(User user) {
		Map<String,String> map = new HashMap<String, String>();
		User userObj = userDao.findByUserNameAndPassword(user.getUserName(), user.getPassword());
		if(userObj != null) {
			map.put("msg", "Customer saved successfully");
		}else {
			map.put("msg", "Bad Credentials");
		}
		return map;
	}

}
