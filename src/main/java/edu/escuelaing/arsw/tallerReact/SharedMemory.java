package edu.escuelaing.arsw.tallerReact;

import java.util.ArrayList;

public class SharedMemory {
	private static final SharedMemory instance = new SharedMemory();
	
	private ArrayList<String> users= new ArrayList<>();
	
	private SharedMemory() {
		
	}
	
	public static SharedMemory getInstance() {
		return instance;
	}
	
	public void add(String value) {
		users.add(value);
	}
	
	public String toString() {
		return users.toString();
	}

}
