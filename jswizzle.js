function optional(val) {
	this.defined = (val === undefined ? false : true);
	this.val = (val === undefined ? undefined : val);

	function isSet() {
		return this.defined;
	}
	function get() {
		if(this.isSet()) {
			return this.val;
		} else {
			throw new Error('You cannot unwrap an unset optional.');
		}
	}
	function set(val) {
		this.defined = true;
		this.val = val;
		return this.val;
	}
	function unset() {
		this.defined = false;
		this.val = undefined;
	}
}
