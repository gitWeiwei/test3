package com.csdn.net.modifier;

public class ProtectedModifier {
   protected void testProtected(){
	   System.out.println("protected====futher");
   }
   public static void main(String[] args) {
		ProtectedSonModifier p = new ProtectedSonModifier();
		p.testProtected();
	}
}
class ProtectedSonModifier extends ProtectedModifier{
	/*@Override
	protected void testProtected() {
		// TODO Auto-generated method stub
		super.testProtected();
	};*/
	
}