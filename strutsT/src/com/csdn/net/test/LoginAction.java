package com.csdn.net.test;

public class LoginAction {

	private String name;
	private String password;
	private String msg;

	public String execute() {
		if ("liuxin".equals(name) && "1234".equals(password)) {
			this.msg = "login successful";
			return "success";
		}
		this.msg = "login failed,please check your user/pwd";
		return "fail";
	}
	
	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getName() {
		return name;
	}
	public String getPassword() {
		return password;
	}
	public void setName(String name) {
		this.name = name;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMessage() {
		return this.msg;
	}
}
