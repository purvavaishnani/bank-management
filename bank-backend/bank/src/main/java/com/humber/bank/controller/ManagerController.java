package com.humber.bank.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.humber.bank.entity.Account;
import com.humber.bank.entity.Branch;
import com.humber.bank.entity.Customer;
import com.humber.bank.entity.Manager;
import com.humber.bank.entity.Transaction;
import com.humber.bank.entity.User;
import com.humber.bank.exception.ResourceNotFoundException;
import com.humber.bank.service.AccountService;
import com.humber.bank.service.BranchService;
import com.humber.bank.service.CustomerService;
import com.humber.bank.service.TransactionService;
import com.humber.bank.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/manager")
public class ManagerController {

	@Autowired
	TransactionService transactionService;

	@Autowired
	AccountService accountService;

	@Autowired
	CustomerService customerService;

	@Autowired
	BranchService branchService;

	@Autowired
	UserService userService;
	
	Logger logger = LoggerFactory.getLogger(ManagerController.class);
	
	@PostMapping("/signin")
	public ResponseEntity<String> authenticateUser(@RequestBody User user) {
		Map<String, String> userObj = userService.authenticateUser(user);
		return !userObj.isEmpty() ? new ResponseEntity<>(userObj.get("msg"), HttpStatus.OK)
				: new ResponseEntity<>(userObj.get("msg"), HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/addCustomer")
	public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
		try {
			Map<String, Customer> customerMap = customerService.addCustomer(customer);
			logger.info("Customer added successfully");
			return !customerMap.isEmpty() ? new ResponseEntity<>(customerMap, HttpStatus.OK)
					: new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			
		} catch (Exception exception) {
			throw new ResourceNotFoundException(exception.getMessage());
		}
	}

	
	
	@PutMapping("/updateCustomer")
	public ResponseEntity<?> updateCustomer(@RequestBody Customer customer) {
		try {
			Map<String, Customer> customerMap = customerService.updateCustomer(customer);
			return !customerMap.isEmpty() ? new ResponseEntity<>(customerMap, HttpStatus.OK)
					: new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (Exception exception) {
			throw new ResourceNotFoundException(exception.getMessage());
		}
	}

	@DeleteMapping("/deleteCustomer/{customerId}")
	public ResponseEntity<?> deleteCustomer(@PathVariable long customerId) {
		try {
			customerService.deleteCustomer(customerId);
			return new ResponseEntity<>("Customer Deleted Successfully", HttpStatus.OK);
		} catch (Exception exception) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}
	
	@PostMapping("/addAccount")
	public ResponseEntity<?> addAccount(@RequestBody Account account) {
		Map<String, Account> accountMap = accountService.addAccount(account);
		return !accountMap.isEmpty() ? new ResponseEntity<>(accountMap, HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.BAD_REQUEST);

	}

	@PutMapping("/updateAccount")
	public ResponseEntity<?> updateAccount(@RequestBody Account account) {
		Map<String, Account> accountMap = accountService.updateAccount(account);
		return !accountMap.isEmpty() ? new ResponseEntity<>(accountMap, HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.BAD_REQUEST);

	}

	@DeleteMapping("/deleteAccount/{accNo}")
	public ResponseEntity<?> deleteAccount(@PathVariable long accNo) {
		try {
			accountService.deleteAccount(accNo);
			return new ResponseEntity<String>("Account Deleted Successfully", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/balanceEnquiry/{accNo}/{managerId}")
	public ResponseEntity<?> balanceEnquiry(@PathVariable("accNo") long accNo, @PathVariable long managerId) {
		try {
			double balance = accountService.getBalance(accNo, managerId);
			return balance != 0 ? new ResponseEntity<>("Account Balance: " + balance, HttpStatus.OK)
					: new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (Exception exception) {
			throw new ResourceNotFoundException("Account number is not valid");
		}
	}

	@GetMapping("/miniStatement")
	public ResponseEntity<?> getMiniStatement(@RequestParam("accNo") String accNum) {
		try {
			long accNo = Long.parseLong(accNum);
			List<Transaction> statementList = transactionService.miniStatement(accNo);
			return !statementList.isEmpty() ? new ResponseEntity<>(statementList, HttpStatus.OK)
					: new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (Exception exception) {
			throw new ResourceNotFoundException(exception.getMessage());
		}
	}

	

	@PostMapping("/saveBranch")
	public ResponseEntity<?> saveBranch(@RequestBody Branch branch) {
		try {
			Map<String, Branch> branchMap = branchService.addBranch(branch);
			return !branchMap.isEmpty() ? new ResponseEntity<>(branchMap, HttpStatus.OK)
					: new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (Exception exception) {
			throw new ResourceNotFoundException(exception.getMessage());
		}
	}

}
