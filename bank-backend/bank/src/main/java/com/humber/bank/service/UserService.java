package com.humber.bank.service;

import java.util.Map;

import com.humber.bank.entity.User;

public interface UserService {

	Map<String, String> authenticateUser(User user);
}
