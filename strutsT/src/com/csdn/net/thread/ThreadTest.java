package com.csdn.net.thread;


public class ThreadTest {
	public static void main(String[] args) {

		Thread t1 = new Thread();
		
		Thread t2 = new Thread(new Runnable() {
			public void run() {
				System.out.println("t2================");
			}
		});
		for(int i = 0 ; i <30;i++){
			System.out.println(t2.getName()+">>>>>"+i);
		}
		t1.run();
		t1.start();
		
		t2.start();
		
	}
}
