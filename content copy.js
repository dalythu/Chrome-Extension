class Task {
	constructor (First name, Last name){
		this._fname = First Name;
		this._lname = Last Name;
	}
	get First Name(){
		return this._fname;
	}
	get Last Name(){
		return this.lname;
	}
	set email(email){
		this._email = email;
	}
	set password(password){
		this._password = password;
}

save(){
	let login = [];
	login.push({"email":this._email});
	login.push({"password":this._email});
	chrome.storage.sync.set({[this._email]: login}, function(){});
}
submit(){
	let task = new Task(First Name, Last Name);
	save();
}