package com.humber.bank.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;


import com.humber.bank.entity.Account;
import com.humber.bank.entity.Branch;
import com.humber.bank.entity.CurrentAccount;
import com.humber.bank.entity.Customer;
import com.humber.bank.entity.Transaction;
import com.humber.bank.exception.ResourceNotFoundException;
import com.humber.bank.service.AccountService;
// import com.humber.bank.service.BranchService;
import com.humber.bank.service.CustomerService;
import com.humber.bank.service.TransactionService;

@RestController
@RequestMapping("/api/manager")
public class ManagerController {

	@Autowired
	AccountService accountService;

	@Autowired
	CustomerService customerService;


	@RequestMapping(value="/adminDashboard",method = RequestMethod.GET) 
	public void method(HttpServletResponse httpServletResponse) {
	httpServletResponse.setHeader("Location","http://localhost:3000/MainPage");
	 httpServletResponse.setStatus(302); 
	 }



	@GetMapping("/check")
	public String hello() {
		return "hello manager";

	}



	@PostMapping("/addCustomer")
	public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
		try {
			Map<String, Customer> customerMap = customerService.addCustomer(customer);
			System.out.println(customerMap);
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
	
}

