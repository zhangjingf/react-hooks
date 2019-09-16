try {
  module.export = Promise;
} catch (error) {
}

function Promise(executor) {
  var self = this;
  self.status = 'pending';
  //self.data = undefined;
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  function resolve (value) {
    if (value instanceof Promise) {
      return value.then(resolve, reject);
    }
    setTimeout(function() {
      if (self.status === 'pending') {
        self.status = 'resolved';
        self.data = value;
        for(var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onResolvedCallback[i](value);
        }
      }
    })
  }

  function reject (reason) {
    setTimeout(() => {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.data = reason;
        for(var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason);
        }
      }
    });
  }
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  var self = this;
  var promise2;
  onResolved = typeof onResolved === 'function' ? onResolved : function(value) {return value};
  onRejected = typeof onRejected === 'function' ? onRejected : function(reason) {return reason};
  if (self.status === 'resolved') {
    return promise2 = new Promise(function(resolve, reject) {
      try {
        var x = onResolved(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
        resolve(x);
      } catch (error) {
        reject(error);
      }
    })
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise(function(resolve, reject) {
      try {
        var x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
        resolve(x);
      } catch (error) {
        reject(error);
      }
    })
  }

  if (self.status === 'pending') {
    return promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      })

      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}