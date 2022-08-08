package com.humber.bank.service;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.humber.bank.entity.Customer;
import com.humber.bank.repository.CustomerDao;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustomerDao customerDao;

	@Override
	public Map<String, Customer> addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, Customer> updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteCustomer(long customerId) {
		// TODO Auto-generated method stub
		
	}
	
}
