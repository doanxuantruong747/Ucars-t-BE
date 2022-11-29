#  Doan Xuan Truong 
# Ucar - BE

### Car Brand APIs

````javascript
/**
 * @route POST /carBand
 * @description Create a new car Band
 * @body {name, logo, description}
 * @access 
 */

````

````javascript
/**
 * @route GET /carBand?page=1&limit=10&name=`$name`
 * @description Get carBands with pagination
 * @access public
 */
````

````javascript
/**
 * @route GET /carBrand/detail/:id
 * @description Get a carBrand
 * @access public
 */
````

````javascript
/**
 * @route PUT /carBand/:id
 * @description Update a new carBand
 * @body {name, logo, description}
 * @access 
 */
````

````javascript
/**
 * @route DELETE /carBrand/:id
 * @description Delete a car Brand
 * @access 
 */
````

### Car Model APIs

````javascript
/**
 * @route POST /carModel
 * @description Create new Car Model
 * @body {name,image,price,authorCarBrand}
 * @access public 
 */
````

````javascript
/**
 * @route GET /carModel?page=1&limit=10&name=`$name`
 * @description Get Car Model with pagination
 * @access public
 */

````

````javascript
/**
 * @route GET /carModel/detail/:id
 * @description Get a Car Model
 * @access public
 */

````

````javascript
/**
 * @route PUT /carModel/:id
 * @description Update a new car model
 * @body {name,image,price,authorCarBrand}
 * @access 
 */
````

```javascript
/**
 * @route DELETE /carModel/:id
 * @description Delete a car model
 * @access 
 */
```

