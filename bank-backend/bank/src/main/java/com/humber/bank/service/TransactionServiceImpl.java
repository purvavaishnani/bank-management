package com.humber.bank.service;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.humber.bank.entity.Transaction;
import com.humber.bank.repository.AccountDao;
import com.humber.bank.repository.TransactionDao;

@Service
public class TransactionServiceImpl  implements TransactionService{


	@Autowired
	AccountDao accountDao;
	
	

	@Autowired
	TransactionDao transactionDao;



	@Override
	public Map<String, String> fundTransfer(Transaction transaction) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public Map<String, String> deposit(Transaction transaction) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public Map<String, String> withdraw(Transaction transaction) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public List<Transaction> miniStatement(long accNo) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public List<Transaction> customizeStatement(Transaction transaction, long accNo) {
		// TODO Auto-generated method stub
		return null;
	}

	

}


