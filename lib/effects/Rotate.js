'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Effect2 = _interopRequireDefault(require("./Effect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A rotating effect that involves rotating the game a specified number of degrees.
 */
var Rotate = /*#__PURE__*/function (_Effect) {
  _inherits(Rotate, _Effect);

  /**
   * A reference to the initial angle.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The initial pivot of the container.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * A reference to the easing function to use for this effect.
   * 
   * @private
   * 
   * @property {Function}
   */

  /**
   * @param {PIXI.Container} container A reference to the container to apply the rotate effect to.
   * @param {number} angle The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  function Rotate(container, angle, duration, easing) {
    var _this;

    _classCallCheck(this, Rotate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rotate).call(this, container));

    _defineProperty(_assertThisInitialized(_this), "_initialAngle", void 0);

    _defineProperty(_assertThisInitialized(_this), "_desiredAngle", void 0);

    _defineProperty(_assertThisInitialized(_this), "_initialPivot", void 0);

    _defineProperty(_assertThisInitialized(_this), "_easing", void 0);

    _this._initialAngle = container.angle;
    _this._desiredAngle = angle;
    _this.duration = duration;
    _this._easing = easing;
    _this._initialPivot = {
      x: _this.container.pivot.x,
      y: _this.container.pivot.y
    };
    if (_this._initialPivot.x == 0) _this.container.pivot.x = _this.container.width / 2;
    if (_this._initialPivot.y == 0) _this.container.pivot.y = _this.container.height / 2;
    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(Rotate, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.criteriaMet()) {
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = (this.current - this.started) / this.duration;

      var percentageThroughAnimation = this._easing(timeDiffPercentage);

      var angleAmount = this._desiredAngle * percentageThroughAnimation;
      this.container.angle = this._initialAngle + angleAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the container's current angle is very close to the desired angle.
     * 
     * We can't use container angle == desired angle because with the game loop we might miss that exact moment so we check a very small window.
     * 
     * @private
     * 
     * @returns {boolean} Returns true if the angle criteria is met or false otherwise.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.container.angle > this._desiredAngle) return true;
      return false;
    }
  }]);

  return Rotate;
}(_Effect2["default"]);

exports["default"] = Rotate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL1JvdGF0ZS50cyJdLCJuYW1lcyI6WyJSb3RhdGUiLCJjb250YWluZXIiLCJhbmdsZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiX2luaXRpYWxBbmdsZSIsIl9kZXNpcmVkQW5nbGUiLCJfZWFzaW5nIiwiX2luaXRpYWxQaXZvdCIsIngiLCJwaXZvdCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNyaXRlcmlhTWV0IiwiZmluaXNoZWQiLCJkaXNwYXRjaCIsImN1cnJlbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVEaWZmUGVyY2VudGFnZSIsInN0YXJ0ZWQiLCJwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbiIsImFuZ2xlQW1vdW50IiwidXNlUkFGIiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJFZmZlY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHcUJBLE07OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7O0FBTUEsa0JBQVlDLFNBQVosRUFBdUNDLEtBQXZDLEVBQXNEQyxRQUF0RCxFQUF3RUMsTUFBeEUsRUFBMEY7QUFBQTs7QUFBQTs7QUFDeEYsZ0ZBQU1ILFNBQU47O0FBRHdGOztBQUFBOztBQUFBOztBQUFBOztBQUd4RixVQUFLSSxhQUFMLEdBQXFCSixTQUFTLENBQUNDLEtBQS9CO0FBRUEsVUFBS0ksYUFBTCxHQUFxQkosS0FBckI7QUFFQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUVBLFVBQUtJLE9BQUwsR0FBZUgsTUFBZjtBQUVBLFVBQUtJLGFBQUwsR0FBcUI7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLE1BQUtSLFNBQUwsQ0FBZVMsS0FBZixDQUFxQkQsQ0FBMUI7QUFBNkJFLE1BQUFBLENBQUMsRUFBRSxNQUFLVixTQUFMLENBQWVTLEtBQWYsQ0FBcUJDO0FBQXJELEtBQXJCO0FBRUEsUUFBSSxNQUFLSCxhQUFMLENBQW1CQyxDQUFuQixJQUF3QixDQUE1QixFQUErQixNQUFLUixTQUFMLENBQWVTLEtBQWYsQ0FBcUJELENBQXJCLEdBQXlCLE1BQUtSLFNBQUwsQ0FBZVcsS0FBZixHQUF1QixDQUFoRDtBQUMvQixRQUFJLE1BQUtKLGFBQUwsQ0FBbUJHLENBQW5CLElBQXdCLENBQTVCLEVBQStCLE1BQUtWLFNBQUwsQ0FBZVMsS0FBZixDQUFxQkMsQ0FBckIsR0FBeUIsTUFBS1YsU0FBTCxDQUFlWSxNQUFmLEdBQXdCLENBQWpEO0FBZHlEO0FBZXpGO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxVQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUN0QixhQUFLQyxRQUFMLENBQWNDLFFBQWQ7QUFFQTtBQUNEOztBQUVELFdBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFFQSxVQUFNQyxrQkFBMEIsR0FBRyxDQUFDLEtBQUtILE9BQUwsR0FBZSxLQUFLSSxPQUFyQixJQUFnQyxLQUFLbEIsUUFBeEU7O0FBRUEsVUFBTW1CLDBCQUFrQyxHQUFHLEtBQUtmLE9BQUwsQ0FBYWEsa0JBQWIsQ0FBM0M7O0FBRUEsVUFBTUcsV0FBbUIsR0FBRyxLQUFLakIsYUFBTCxHQUFxQmdCLDBCQUFqRDtBQUVBLFdBQUtyQixTQUFMLENBQWVDLEtBQWYsR0FBdUIsS0FBS0csYUFBTCxHQUFxQmtCLFdBQTVDO0FBRUEsVUFBSSxLQUFLQyxNQUFULEVBQWlCLEtBQUtDLEVBQUwsR0FBVUMscUJBQXFCLENBQUM7QUFBQSxlQUFNLE1BQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUEsT0FBRCxDQUEvQjtBQUNsQjtBQUVEOzs7Ozs7Ozs7Ozs7a0NBU3VCO0FBQ3JCLFVBQUksS0FBSzFCLFNBQUwsQ0FBZUMsS0FBZixHQUF1QixLQUFLSSxhQUFoQyxFQUErQyxPQUFPLElBQVA7QUFFL0MsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUFoR2lDc0IsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcblxyXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vRWZmZWN0JztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9pbnRlcmZhY2UvVmVjdG9yJztcclxuXHJcbi8qKlxyXG4gKiBBIHJvdGF0aW5nIGVmZmVjdCB0aGF0IGludm9sdmVzIHJvdGF0aW5nIHRoZSBnYW1lIGEgc3BlY2lmaWVkIG51bWJlciBvZiBkZWdyZWVzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlIGV4dGVuZHMgRWZmZWN0IHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5pdGlhbCBhbmdsZS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2luaXRpYWxBbmdsZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYW5nbGUgdG8gcm90YXRlIHRvLCBmcm9tIDAgdG8gMzYwIHdpdGggMCBiZWluZyB0aGUgZGVmYXVsdCBzdGF0ZSBhbmQgMzYwIGJlaW5nIGFsbCB0aGUgd2F5IGFyb3VuZCBiYWNrIHRvIHRoZSBkZWZhdWx0IHN0YXRlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZGVzaXJlZEFuZ2xlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIHBpdm90IG9mIHRoZSBjb250YWluZXIuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1ZlY3Rvcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbml0aWFsUGl2b3Q6IFZlY3RvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVhc2luZyBmdW5jdGlvbiB0byB1c2UgZm9yIHRoaXMgZWZmZWN0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBwcml2YXRlIF9lYXNpbmc6IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgcm90YXRlIGVmZmVjdCB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgVGhlIGFuZ2xlIHRvIHJvdGF0ZSB0bywgZnJvbSAwIHRvIDM2MCB3aXRoIDAgYmVpbmcgdGhlIGRlZmF1bHQgc3RhdGUgYW5kIDM2MCBiZWluZyBhbGwgdGhlIHdheSBhcm91bmQgYmFjayB0byB0aGUgZGVmYXVsdCBzdGF0ZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgdGhlIGVmZmVjdCBzaG91bGQgdGFrZS5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYXNpbmcgVGhlIGVhc2luZyBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogUElYSS5Db250YWluZXIsIGFuZ2xlOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGVhc2luZzogRnVuY3Rpb24pIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5faW5pdGlhbEFuZ2xlID0gY29udGFpbmVyLmFuZ2xlO1xyXG5cclxuICAgIHRoaXMuX2Rlc2lyZWRBbmdsZSA9IGFuZ2xlXHJcblxyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG5cclxuICAgIHRoaXMuX2Vhc2luZyA9IGVhc2luZztcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsUGl2b3QgPSB7IHg6IHRoaXMuY29udGFpbmVyLnBpdm90LngsIHk6IHRoaXMuY29udGFpbmVyLnBpdm90LnkgfTtcclxuXHJcbiAgICBpZiAodGhpcy5faW5pdGlhbFBpdm90LnggPT0gMCkgdGhpcy5jb250YWluZXIucGl2b3QueCA9IHRoaXMuY29udGFpbmVyLndpZHRoIC8gMjtcclxuICAgIGlmICh0aGlzLl9pbml0aWFsUGl2b3QueSA9PSAwKSB0aGlzLmNvbnRhaW5lci5waXZvdC55ID0gdGhpcy5jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGlzIGVmZmVjdCBvbiBhIGZyYW1lIGJ5IGZyYW1lIGJhc2lzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkpIHtcclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVEaWZmUGVyY2VudGFnZTogbnVtYmVyID0gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCkgLyB0aGlzLmR1cmF0aW9uO1xyXG5cclxuICAgIGNvbnN0IHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uOiBudW1iZXIgPSB0aGlzLl9lYXNpbmcodGltZURpZmZQZXJjZW50YWdlKTtcclxuXHJcbiAgICBjb25zdCBhbmdsZUFtb3VudDogbnVtYmVyID0gdGhpcy5fZGVzaXJlZEFuZ2xlICogcGVyY2VudGFnZVRocm91Z2hBbmltYXRpb247XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIuYW5nbGUgPSB0aGlzLl9pbml0aWFsQW5nbGUgKyBhbmdsZUFtb3VudDtcclxuXHJcbiAgICBpZiAodGhpcy51c2VSQUYpIHRoaXMuaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBjb250YWluZXIncyBjdXJyZW50IGFuZ2xlIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGRlc2lyZWQgYW5nbGUuXHJcbiAgICogXHJcbiAgICogV2UgY2FuJ3QgdXNlIGNvbnRhaW5lciBhbmdsZSA9PSBkZXNpcmVkIGFuZ2xlIGJlY2F1c2Ugd2l0aCB0aGUgZ2FtZSBsb29wIHdlIG1pZ2h0IG1pc3MgdGhhdCBleGFjdCBtb21lbnQgc28gd2UgY2hlY2sgYSB2ZXJ5IHNtYWxsIHdpbmRvdy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGFuZ2xlIGNyaXRlcmlhIGlzIG1ldCBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgY3JpdGVyaWFNZXQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIuYW5nbGUgPiB0aGlzLl9kZXNpcmVkQW5nbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0iXX0=