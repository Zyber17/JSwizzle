var Optional = function(val) {
	this.defined = false;
	Object.defineProperty(this, "val", {
		get: function() {
			if(this.defined) {
				return val;
			} else {
				throw new Error('You cannot unwrap an unset optional.');
			}
		},
		set: function(newVal) {
			if (newVal === undefined) {
				this.defined = false;
				val = undefined
			} else {
				this.defined = true;
				val = newVal;
			}
		}
	});
	this.val = val;

	this.isSet = function() {
		return this.defined;
	};

	this.unset = function() {
		this.val = undefined;
	}
}

module.exports = Optional;
