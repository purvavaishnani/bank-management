package com.humber.bank.service;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.humber.bank.entity.Account;
import com.humber.bank.entity.CurrentAccount;
import com.humber.bank.repository.AccountDao;

@Service
public class AccountServiceImpl implements AccountService{

	@Autowired
	AccountDao accountDao;

	@Override
	public Map<String, Account> addAccount(Account account) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, Account> saveAccount(CurrentAccount account) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, Account> updateAccount(Account account) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAccount(long accountId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Account findAccountById(long accNo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public double getBalance(long accNo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double getBalance(long accNo, long managerId) {
		// TODO Auto-generated method stub
		return 0;
	}

}
