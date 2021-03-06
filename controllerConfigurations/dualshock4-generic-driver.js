var conrollerConfiguration = { 
	"analogsPresent" : true,
	"leftAnalogY" : 2,
	"leftAnalogX" : 1,
	"rightAnalogY" : 4,
	"rightAnalogX" : 3,
	"vendorId" : 1356,
	"productId" : 1476,
	"buttons" : {
		"l2": {
			"buttonBlock": 6,
			"buttonValue": 0x04,
			"analogPin" : 8
		},
		"r2":{
			"buttonBlock": 6,
			"buttonValue": 0x08,
			"analogPin" : 9
		},
		"l1":{
			"buttonBlock": 6,
			"buttonValue": 0x01
		},
		"r1":{
			"buttonBlock": 6,
			"buttonValue": 0x02
		},
		"leftAnalogBump":{
			"buttonBlock": 6,
			"buttonValue": 0x40
		},
		"rightAnalogBump":{
			"buttonBlock": 6,
			"buttonValue": 0x80
		},
		"psxButton":{
			"buttonBlock": 7,
			"buttonValue": 0x01
		},
		"touchPad":{
			"buttonBlock": 7,
			"buttonValue": 0x02
		}
	}
}
module.exports = conrollerConfiguration;
