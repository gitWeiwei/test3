package com.csdn.net.modifier;

/**
 * 私有方法只能创建此方法的类可以调用，子类也不能调用
 * 
 * @author we
 *
 */
public class PrivateModifier {

	protected PrivateModifier() {

	}

	private void testPrivate() {
		System.out.println("private----father");
	}

	public static void main(String[] args) {
		// PrivateModifier p = new PrivateModifier();
		privateSonModifier p = new privateSonModifier();
		// p.testPrivate();
	}
}

class privateSonModifier extends ProtectedModifier {

}