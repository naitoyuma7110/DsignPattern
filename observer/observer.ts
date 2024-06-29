import { Subject, ConcreteSubject } from "./subject";

export interface Observer {
	update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
	public update(subject: Subject): void {
		if (subject instanceof ConcreteSubject && subject.state < 3) {
			console.log("ConcreteObserverA: Reacted to the event.");
		}
	}
}

class ConcreteObserverB implements Observer {
	public update(subject: Subject): void {
		if (
			subject instanceof ConcreteSubject &&
			(subject.state === 0 || subject.state >= 2)
		) {
			console.log("ConcreteObserverB: Reacted to the event.");
		}
	}
}
