/**
 * My API Sandbox
 * 
 */





Sandbox.define('/search/{masterId}', 'GET', function(req, res){
    // Set the type of response, sets the content type.
    res.type(Sandbox.config.defaultResponseType);
    
    // Set the status code of the response.
    res.status(Sandbox.config.http_success_status_code);
    
    var masterId = req.params.masterId;
    
    var cust = {
        "location": "10009/14/1983KJFALJDL",
        "servicingOrgUnit": "RESSTD",
        "languagePreference": "English",
        "parentCidn": "",
        "customerAccount": {
            "preferredMethod": "eMail",
            "lastName": "AAFSASFASFFS",
            "acn": "000000019",
            "fraudFlag": "N",
            "driverLicenceNumber": "",
            "effectiveRetiredDate": "",
            "webAddress": "",
            "emailAddress": "vignesh.sekhar@team.telstra.com",
            "dataSovereignty": "",
            "abn": "784125495",
            "driverLicenceState": "",
            "title": "MS",
            "faxNumber": "",
            "phoneNumber": "+610498765432",
            "birthDate": "1983-09-14",
            "accountUuid": "B1BBE86C-042B-4f38-9895-B59903DC22A1",
            "firstName": "KJFALJDL"
        },
        "accountTrading": [{
            "isPrimary": "",
            "tradingName": ""
        }],
        "cac": "2021853471",
        "marketSegment": "Consumer Unsegmented",
        "customerManagedFlag": "N",
        "accountStatus": "ACTIVE",
        "createdDate": "2016-09-26T14:29:30+10:00",
        "geographicalLocationCode": "3V",
        "customerType": "Residential",
        "customerSince": "2016-09-26",
        "accountPortfolio": [{
            "portfolioName": "",
            "isPrimary": "",
            "accountExecutiveLastName": "",
            "portfolioCode": "",
            "accountExecutivePhoneNumber": "",
            "accountExecutiveFirstName": ""
        }],
        "lastUpdated": "2016-09-26T16:38:47+10:00",
        "cidn": "4892206828",
        "ultimateParentCidn": "",
        "ownershipCode": "",
        "businessUnit": "Consumer",
        "category": {
            "online": ""
        },
        "revenueOrganisationUnit": "CCU3V0",
        "priorityAssist": "N",
        "address": [{
            "state": "VIC",
            "streetTypeCode": "AVENUE",
            "addressId": "50280321",
            "statusCode": "CONFIRMED",
            "streetTypeSuffixCode": "",
            "postalCode": "3450",
            "registeredPlan": "",
            "streetNumberStart": "15",
            "subAddress": {
                "propertyName": "",
                "privateStreetType": "",
                "privateStreetName": "",
                "details": [{
                    "detailType": "",
                    "value": "",
                    "detailTypeCode": ""
                }, {
                    "detailType": "",
                    "value": "",
                    "detailTypeCode": ""
                }],
                "numberStart": "",
                "buildingName": "",
                "addressLines": ["15 ROBERTSON AVE,", "", ""],
                "numberEnd": "",
                "privateStreetTypeCode": ""
            },
            "streetType": "AVE",
            "internationalState": "",
            "isPrimary": "Y",
            "status": "CO",
            "streetNumberStartSuffix": "",
            "streetName": "ROBERTSON",
            "addressType": "CO",
            "additionalInfo": "",
            "country": "AUSTRALIA",
            "internationalPostcode": "",
            "addressTypeCode": "",
            "streetTypeSuffix": "",
            "streetNumberEnd": "",
            "deliveryPointId": "30479498",
            "streetNumberEndSuffix": "",
            "locality": "CASTLEMAINE"
        }],
        "masterID": "10000143877",
        "premiumService": "N"
    };
    
    var resp = {
        'data': {
            'customers': [],
            'paging': {
                'limit': '50',
                'lastPage': 'Y',
                'resultBlockSize': '25',
                'offset': '0'
            }
        }
    };;
    
    if (masterId == '123') {
        cust.cac = '123456789';
        cust.customerAccount.firstName = 'John';
        cust.customerAccount.lastName = 'Smith';
        resp.data.customers.push(cust);
    } else if (masterId == '456') {
        cust.cac = '456789123';
        cust.customerAccount.firstName = 'Sandy';
        cust.customerAccount.lastName = 'Steers'
        resp.data.customers.push(cust);
    } else if (masterId == '789') {
        cust.cac = '789123456';
        cust.customerAccount.firstName = 'Wilson';
        cust.customerAccount.lastName = 'Will';
        cust.address[0].addressId = '70278641';
        resp.data.customers.push(cust);
    } else {
        var last = masterId.substr(0, 1);
        if (last == 0) {
            lastPage = 'N';
        } else {
            lastPage = 'Y';
        }
        var count = masterId.substr(1, masterId.length);
        var limit = req.query.limit;
        var offset = req.query.offset;
    
        resp = {
            'data': {
                'customers': [],
                'paging': {
                    'limit': limit,
                    'lastPage': lastPage,
                    'resultBlockSize': '25',
                    'offset': offset
                }
            }
        };
    
        for (i = 0; i < count; i++) {
            resp.data.customers.push(cust);
        }
    }
    
    res.json(resp);
})

Sandbox.define('/address-search/addresses','GET', function(req, res){
    // Set the type of response, sets the content type.
    res.type(Sandbox.config.defaultResponseType);
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "addresses": [{
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "50",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470318296",
                "name": "SEACHANGE ON PAVILION",
                "ruralMailType": "",
                "numberTo": "67",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": {
                        "subAddressComponents": [{
                            "subAddressComponents": {
                                "id": "266095637",
                                "parentAddressId": "264007897",
                                "subAddressType": "RM",
                                "number": "LIFTPHO"
                            },
                            "id": "264007897",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "G",
                            "streetName": "",
                            "streetType": ""
                        }, {
                            "subAddressComponents": [{
                                "id": "416869685",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "1"
                            }, {
                                "id": "417406744",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "10"
                            }, {
                                "id": "417559113",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "11"
                            }, {
                                "id": "416765222",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "12"
                            }, {
                                "id": "417859108",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "13"
                            }, {
                                "id": "417959108",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "14"
                            }, {
                                "id": "417659112",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "15"
                            }, {
                                "id": "416582076",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "16"
                            }, {
                                "id": "416181624",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "17"
                            }, {
                                "id": "416295442",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "19"
                            }, {
                                "id": "417659113",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "2"
                            }, {
                                "id": "416286844",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "20"
                            }, {
                                "id": "417454174",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "21"
                            }, {
                                "id": "417959111",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "22"
                            }, {
                                "id": "417659115",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "23"
                            }, {
                                "id": "416758953",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "24"
                            }, {
                                "id": "417659116",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "25"
                            }, {
                                "id": "416272212",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "26"
                            }, {
                                "id": "416372190",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "27"
                            }, {
                                "id": "417859114",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "28"
                            }, {
                                "id": "418059112",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "29"
                            }, {
                                "id": "417116539",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "3"
                            }, {
                                "id": "416350062",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "30"
                            }, {
                                "id": "416882564",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "31"
                            }, {
                                "id": "417759121",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "32"
                            }, {
                                "id": "417898637",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "33"
                            }, {
                                "id": "417148603",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "34"
                            }, {
                                "id": "417065180",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "35"
                            }, {
                                "id": "417759123",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "36"
                            }, {
                                "id": "417092282",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "4"
                            }, {
                                "id": "418059116",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "5"
                            }, {
                                "id": "417456157",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "6"
                            }, {
                                "id": "417475426",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "7"
                            }, {
                                "id": "417759124",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "8"
                            }, {
                                "id": "416184907",
                                "parentAddressId": "264007861",
                                "subAddressType": "U",
                                "number": "9"
                            }],
                            "id": "264007861",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "id": "264007860",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "2",
                            "streetType": ""
                        }, {
                            "id": "264007859",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "3",
                            "streetType": ""
                        }, {
                            "subAddressComponents": {
                                "id": "417959109",
                                "parentAddressId": "264007857",
                                "subAddressType": "U",
                                "number": "18"
                            },
                            "id": "264007857",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "4",
                            "streetType": ""
                        }, {
                            "subAddressComponents": [{
                                "id": "266095661",
                                "parentAddressId": "264007856",
                                "subAddressType": "U",
                                "number": "41"
                            }, {
                                "id": "427300828",
                                "parentAddressId": "264007856",
                                "subAddressType": "U",
                                "number": "42"
                            }, {
                                "id": "427400828",
                                "parentAddressId": "264007856",
                                "subAddressType": "U",
                                "number": "43"
                            }],
                            "id": "264007856",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "5",
                            "streetType": ""
                        }, {
                            "subAddressComponents": {
                                "id": "427500828",
                                "parentAddressId": "419439234",
                                "subAddressType": "U",
                                "number": "44"
                            },
                            "id": "419439234",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "6",
                            "streetType": ""
                        }, {
                            "id": "427600828",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264007855",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "7",
                            "streetType": ""
                        }],
                        "id": "264007855",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470318296",
                        "subAddressType": "BG",
                        "streetName": "",
                        "number": "",
                        "streetType": ""
                    }
                },
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "63",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "MATR",
                    "facsRealm": "30"
                },
                "numberOfSubAddresses": "70",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "260851035",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": [{
                        "subAddressComponents": [{
                            "id": "264106253",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264106207",
                            "subAddressType": "B",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "subAddressComponents": [{
                                "id": "264106235",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "101"
                            }, {
                                "id": "264106236",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "102"
                            }, {
                                "id": "264106237",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "103"
                            }, {
                                "id": "418641928",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "104"
                            }, {
                                "id": "264106239",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "105"
                            }, {
                                "id": "264106240",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "106"
                            }, {
                                "id": "264106241",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "107"
                            }, {
                                "id": "264106242",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "108"
                            }, {
                                "id": "264106243",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "109"
                            }, {
                                "id": "264106244",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "110"
                            }, {
                                "id": "418191646",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "111"
                            }, {
                                "id": "264106246",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "112"
                            }, {
                                "id": "419023145",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "113"
                            }, {
                                "id": "418291655",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "114"
                            }, {
                                "id": "264106249",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "115"
                            }, {
                                "id": "264106250",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "116"
                            }, {
                                "id": "264106251",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "117"
                            }, {
                                "id": "264106252",
                                "parentAddressId": "264106234",
                                "subAddressType": "U",
                                "number": "118"
                            }],
                            "id": "264106234",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264106207",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "subAddressComponents": [{
                                "id": "264106222",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "201"
                            }, {
                                "id": "264106223",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "202"
                            }, {
                                "id": "264106224",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "203"
                            }, {
                                "id": "264106225",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "204"
                            }, {
                                "id": "264106226",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "205"
                            }, {
                                "id": "264106227",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "206"
                            }, {
                                "id": "264106228",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "207"
                            }, {
                                "id": "264106229",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "208"
                            }, {
                                "id": "418291657",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "209"
                            }, {
                                "id": "418491647",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "210"
                            }, {
                                "id": "264106232",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "211"
                            }, {
                                "id": "418936136",
                                "parentAddressId": "264106221",
                                "subAddressType": "U",
                                "number": "212"
                            }],
                            "id": "264106221",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264106207",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "2",
                            "streetType": ""
                        }, {
                            "subAddressComponents": [{
                                "id": "264106209",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "301"
                            }, {
                                "id": "264106210",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "302"
                            }, {
                                "id": "264106211",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "303"
                            }, {
                                "id": "264106212",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "304"
                            }, {
                                "id": "264106213",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "305"
                            }, {
                                "id": "264106214",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "306"
                            }, {
                                "id": "264106215",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "307"
                            }, {
                                "id": "264106216",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "308"
                            }, {
                                "id": "418976441",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "309"
                            }, {
                                "id": "264106218",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "310"
                            }, {
                                "id": "418591654",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "311"
                            }, {
                                "id": "264106220",
                                "parentAddressId": "264106208",
                                "subAddressType": "U",
                                "number": "312"
                            }],
                            "id": "264106208",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264106207",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "3",
                            "streetType": ""
                        }],
                        "id": "264106207",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "BG",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "418230781",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "101",
                        "streetType": ""
                    }, {
                        "id": "418191645",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "105",
                        "streetType": ""
                    }, {
                        "id": "418391646",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "106",
                        "streetType": ""
                    }, {
                        "id": "418936316",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "107",
                        "streetType": ""
                    }, {
                        "id": "418691646",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "108",
                        "streetType": ""
                    }, {
                        "id": "418991642",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "110",
                        "streetType": ""
                    }, {
                        "id": "418725720",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "112",
                        "streetType": ""
                    }, {
                        "id": "418236501",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "115",
                        "streetType": ""
                    }, {
                        "id": "418221626",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "118",
                        "streetType": ""
                    }, {
                        "id": "418891639",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "202",
                        "streetType": ""
                    }, {
                        "id": "418291656",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "203",
                        "streetType": ""
                    }, {
                        "id": "418271895",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "204",
                        "streetType": ""
                    }, {
                        "id": "418261427",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "206",
                        "streetType": ""
                    }, {
                        "id": "418530207",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "207",
                        "streetType": ""
                    }, {
                        "id": "418991644",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "208",
                        "streetType": ""
                    }, {
                        "id": "418863879",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "211",
                        "streetType": ""
                    }, {
                        "id": "426422743",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "301",
                        "streetType": ""
                    }, {
                        "id": "418891641",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "303",
                        "streetType": ""
                    }, {
                        "id": "418791642",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "306",
                        "streetType": ""
                    }, {
                        "id": "418372533",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "307",
                        "streetType": ""
                    }, {
                        "id": "419026953",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "308",
                        "streetType": ""
                    }, {
                        "id": "418291659",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "310",
                        "streetType": ""
                    }, {
                        "id": "418347664",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260851035",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "312",
                        "streetType": ""
                    }]
                },
                "streetType": "DR",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "1",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2036",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "LITTLE BAY",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "MATR",
                    "facsRealm": "30"
                },
                "numberOfSubAddresses": "4",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "260605242",
                "name": "",
                "ruralMailType": "",
                "numberTo": "8",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": [{
                        "id": "424729359",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260605242",
                        "subAddressType": "TNHS",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "424431657",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260605242",
                        "subAddressType": "TNHS",
                        "streetName": "",
                        "number": "2",
                        "streetType": ""
                    }, {
                        "id": "425526803",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260605242",
                        "subAddressType": "TNHS",
                        "streetName": "",
                        "number": "3",
                        "streetType": ""
                    }, {
                        "id": "422732901",
                        "streetTypeSuffix": "",
                        "parentAddressId": "260605242",
                        "subAddressType": "TNHS",
                        "streetName": "",
                        "number": "4",
                        "streetType": ""
                    }]
                },
                "streetType": "DR",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "2",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2036",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "LITTLE BAY",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "MATR",
                    "facsRealm": "30"
                },
                "numberOfSubAddresses": "13",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "264013167",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": {
                        "subAddressComponents": [{
                            "subAddressComponents": [{
                                "id": "264013282",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "1"
                            }, {
                                "id": "264013283",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "2"
                            }, {
                                "id": "264013284",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "3"
                            }, {
                                "id": "264013285",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "4"
                            }, {
                                "id": "264013286",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "5"
                            }, {
                                "id": "264013287",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "6"
                            }, {
                                "id": "264013288",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "7"
                            }, {
                                "id": "264013289",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "8"
                            }, {
                                "id": "264013290",
                                "parentAddressId": "264013281",
                                "subAddressType": "U",
                                "number": "9"
                            }],
                            "id": "264013281",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264013278",
                            "subAddressType": "G",
                            "streetName": "",
                            "streetType": ""
                        }, {
                            "id": "264013280",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264013278",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "id": "264013279",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264013278",
                            "subAddressType": "L",
                            "streetName": "",
                            "number": "2",
                            "streetType": ""
                        }],
                        "id": "264013278",
                        "streetTypeSuffix": "",
                        "parentAddressId": "264013167",
                        "subAddressType": "BG",
                        "streetName": "",
                        "number": "",
                        "streetType": ""
                    }
                },
                "streetType": "DR",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "3",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2036",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "LITTLE BAY",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "240954075",
                "name": "",
                "ruralMailType": "",
                "numberTo": "",
                "planNumber": "DP946788",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "L",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "1",
                "streetName": "PAVILION",
                "addressType": "Parcel Lot With Plan",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "240954074",
                "name": "",
                "ruralMailType": "",
                "numberTo": "",
                "planNumber": "DP947277",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "L",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "1",
                "streetName": "PAVILION",
                "addressType": "Parcel Lot With Plan",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "264649481",
                "name": "",
                "ruralMailType": "",
                "numberTo": "",
                "planNumber": "DP1040442",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "L",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "2",
                "streetName": "PAVILION",
                "addressType": "Parcel Lot With Plan",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "4",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289668",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": [{
                        "id": "421050117",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289668",
                        "subAddressType": "TNHS",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "420163211",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289668",
                        "subAddressType": "TNHS",
                        "streetName": "",
                        "number": "2",
                        "streetType": ""
                    }, {
                        "id": "426724612",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289668",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "426924609",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289668",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "2",
                        "streetType": ""
                    }]
                },
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "1",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "6",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289654",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": [{
                        "id": "400842789",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289654",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "400842835",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289654",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "2",
                        "streetType": ""
                    }, {
                        "id": "400842197",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289654",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "3",
                        "streetType": ""
                    }, {
                        "id": "400842052",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289654",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "4",
                        "streetType": ""
                    }, {
                        "id": "400842430",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289654",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "5",
                        "streetType": ""
                    }, {
                        "id": "400842848",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289654",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "6",
                        "streetType": ""
                    }]
                },
                "streetType": "ST",
                "numberSuffix": "A",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "2",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289655",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "B",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "2",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289669",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "3",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "10",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289656",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": [{
                        "subAddressComponents": [{
                            "subAddressComponents": [{
                                "id": "400842342",
                                "parentAddressId": "264992827",
                                "subAddressType": "U",
                                "number": "1"
                            }, {
                                "id": "400842622",
                                "parentAddressId": "264992827",
                                "subAddressType": "U",
                                "number": "2"
                            }, {
                                "id": "400841962",
                                "parentAddressId": "264992827",
                                "subAddressType": "U",
                                "number": "3"
                            }, {
                                "id": "431820442",
                                "parentAddressId": "264992827",
                                "subAddressType": "U",
                                "number": "4"
                            }],
                            "id": "264992827",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264992825",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "id": "264992826",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264992825",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "2",
                            "streetType": ""
                        }, {
                            "id": "264992832",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264992825",
                            "subAddressType": "G",
                            "streetName": "",
                            "streetType": ""
                        }],
                        "id": "264992825",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289656",
                        "subAddressType": "BG",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "424242548",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289656",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "417558013",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289656",
                        "subAddressType": "U",
                        "streetName": "",
                        "number": "5",
                        "streetType": ""
                    }]
                },
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "4",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "20",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289670",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": {
                        "subAddressComponents": [{
                            "subAddressComponents": [{
                                "id": "400842220",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "1"
                            }, {
                                "id": "400842674",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "10"
                            }, {
                                "id": "400842893",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "11"
                            }, {
                                "id": "400842222",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "12"
                            }, {
                                "id": "400842306",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "2"
                            }, {
                                "id": "400842367",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "3"
                            }, {
                                "id": "400842368",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "4"
                            }, {
                                "id": "400842803",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "5"
                            }, {
                                "id": "400841990",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "6"
                            }, {
                                "id": "400842309",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "7"
                            }, {
                                "id": "400842191",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "8"
                            }, {
                                "id": "400842706",
                                "parentAddressId": "264222673",
                                "subAddressType": "U",
                                "number": "9"
                            }],
                            "id": "264222673",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264222667",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "id": "264222672",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264222667",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "2",
                            "streetType": ""
                        }, {
                            "id": "264222671",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264222667",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "3",
                            "streetType": ""
                        }, {
                            "id": "264222670",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264222667",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "4",
                            "streetType": ""
                        }, {
                            "id": "264222669",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264222667",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "5",
                            "streetType": ""
                        }, {
                            "id": "264222668",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264222667",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "6",
                            "streetType": ""
                        }, {
                            "id": "264222686",
                            "streetTypeSuffix": "",
                            "parentAddressId": "264222667",
                            "subAddressType": "G",
                            "streetName": "",
                            "streetType": ""
                        }],
                        "id": "264222667",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289670",
                        "subAddressType": "BG",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }
                },
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "5",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289657",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "6",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289671",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "7",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289658",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "8",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289672",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "9",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "7",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289659",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": {
                        "subAddressComponents": [{
                            "subAddressComponents": {
                                "id": "400841957",
                                "parentAddressId": "262871261",
                                "subAddressType": "U",
                                "number": "2"
                            },
                            "id": "262871261",
                            "streetTypeSuffix": "",
                            "parentAddressId": "262871258",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "subAddressComponents": {
                                "id": "400841948",
                                "parentAddressId": "262871259",
                                "subAddressType": "U",
                                "number": "3"
                            },
                            "id": "262871259",
                            "streetTypeSuffix": "",
                            "parentAddressId": "262871258",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "2",
                            "streetType": ""
                        }, {
                            "subAddressComponents": {
                                "id": "400842832",
                                "parentAddressId": "262871263",
                                "subAddressType": "U",
                                "number": "1"
                            },
                            "id": "262871263",
                            "streetTypeSuffix": "",
                            "parentAddressId": "262871258",
                            "subAddressType": "G",
                            "streetName": "",
                            "streetType": ""
                        }],
                        "id": "262871258",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289659",
                        "subAddressType": "BG",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }
                },
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "10",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289673",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "11",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289660",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "12",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289661",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "14",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289674",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "15",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "240994196",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "A",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "15",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "419664540",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "B",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "15",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289662",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "16",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289676",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "17",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "426030294",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "A",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "UNCONFIRMED",
                "locationDescription": "",
                "number": "17",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289663",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "18",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "7",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "470289677",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": {
                    "subAddressComponents": [{
                        "subAddressComponents": [{
                            "subAddressComponents": [{
                                "id": "417352760",
                                "parentAddressId": "265175355",
                                "subAddressType": "U",
                                "number": "1"
                            }, {
                                "id": "265175357",
                                "parentAddressId": "265175355",
                                "subAddressType": "U",
                                "number": "2"
                            }],
                            "id": "265175355",
                            "streetTypeSuffix": "",
                            "parentAddressId": "265175353",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "1",
                            "streetType": ""
                        }, {
                            "id": "265175354",
                            "streetTypeSuffix": "",
                            "parentAddressId": "265175353",
                            "subAddressType": "FL",
                            "streetName": "",
                            "number": "2",
                            "streetType": ""
                        }, {
                            "id": "265175358",
                            "streetTypeSuffix": "",
                            "parentAddressId": "265175353",
                            "subAddressType": "G",
                            "streetName": "",
                            "streetType": ""
                        }],
                        "id": "265175353",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289677",
                        "subAddressType": "BG",
                        "streetName": "",
                        "number": "1",
                        "streetType": ""
                    }, {
                        "id": "419136569",
                        "streetTypeSuffix": "",
                        "parentAddressId": "470289677",
                        "subAddressType": "G",
                        "streetName": "",
                        "number": "",
                        "streetType": ""
                    }]
                },
                "streetType": "ST",
                "numberSuffix": "",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "CONFIRMED",
                "locationDescription": "",
                "number": "19",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }, {
                "greaterLocality": "",
                "serviceLocation": {
                    "connectivityServiceAreaId": "",
                    "locationId": "",
                    "exchangeServiceAreaId": "HARB",
                    "facsRealm": "20"
                },
                "numberOfSubAddresses": "0",
                "localityAbbreviation": "",
                "state": "NSW",
                "long": "",
                "id": "420042378",
                "name": "",
                "ruralMailType": "",
                "numberTo": "0",
                "planNumber": "",
                "subAddress": "",
                "streetType": "ST",
                "numberSuffix": "A",
                "lat": "",
                "numberToPrefix": "",
                "numberPrefix": "",
                "status": "UNCONFIRMED",
                "locationDescription": "",
                "number": "19",
                "streetName": "PAVILION",
                "addressType": "Property With Number",
                "postcode": "2096",
                "rangeIncrement": "",
                "streetTypeSuffix": "",
                "postalDeliveryType": "",
                "locality": "QUEENSCLIFF",
                "numberToSuffix": "",
                "searchConfidence": ""
            }]
        }
    });
})



Sandbox.define('/dop/security/rest/loginservice','POST', function(req, res){
    res.type(Sandbox.config.defaultResponseType);
    res.status(Sandbox.config.http_success_status_code);
    
    res.send('{"access_token": "lFYpKM2LkokcsbzQFKfsMTiPeFcA", "expires_in": "3599"}');
})

Sandbox.define('/manageCustomer','POST', function(req, res){
    // Set the type of response, sets the content type.
    res.type(Sandbox.config.defaultResponseType);
    
    // Set the status code of the response.
    res.status(400);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/orderorchestration/rest/ordermanager/orders','POST', function(req, res){
    // Set the type of response, sets the content type.
    res.type(Sandbox.config.defaultResponseType);
    
    // Set the status code of the response.
    res.status(201);
    
    // Send the response body.
    res.json({
        "status": "accepted"
    });
})

Sandbox.define('/managebilling/rest/validate', 'POST', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type(Sandbox.config.defaultResponseType);
    
    // Set the status code of the response.
    res.status(200);
    
    if (req.body.Product.Owner.Party.ID == '0123456789123' && req.body.Product.Account.ID == '0123456789') {
    
        // Send the response body.
        res.json({
            "flexcabResponse": {
                "product": {
                    "owner": {
                        "party": {
                            "writtenAuthorityIndicator": null,
                            "streetTypeDescription": null,
                            "streetNumberSuffix": null,
                            "streetNameSuffix": null,
                            "streetName": null,
                            "stateAbbreviation": null,
                            "startStreetNumber": null,
                            "sqlCode": null,
                            "returnCode": null,
                            "rentalorOwnershipIndicator": null,
                            "postCode": null,
                            "portfolioCode": null,
                            "ownershipCode": null,
                            "orgUnit": null,
                            "nameRoleCode": null,
                            "masterID": null,
                            "localityName": null,
                            "invoiceArrangementID": null,
                            "internationalPostCode": null,
                            "errorType": null,
                            "errorDescription": "Billing Account not matching",
                            "errorCode": "ER-001",
                            "endStreetNumber": null,
                            "employerName": null,
                            "driversLicence": null,
                            "dateofBirth": null,
                            "customerTradingName": null,
                            "customerRoleName": null,
                            "customerJobFunction": null,
                            "customerGivenName": null,
                            "customerCourtesyTitle": null,
                            "countryCode": null,
                            "contactTelephoneNumber": null,
                            "contactExtensionNumber": null,
                            "companyNumber": null,
                            "cidn": null,
                            "authorizedRepresentativeEndDate": null,
                            "authorizedRepresentativeDisplayName": null,
                            "addressTypeDescription": null,
                            "addressNumberSuffix": null,
                            "addressNumber": null,
                            "addressName": null,
                            "addressLineTwo": null,
                            "addressLineThree": null,
                            "addressLineOne": null,
                            "abn": null
                        }
                    }
                }
            },
            "flexcabError": {
                "timeStamp": null,
                "processName": null,
                "osName": null,
                "moduleName": null,
                "moduleLocation": null,
                "errorTextLength": null,
                "errorText": null,
                "errorCode": null
            }
        });
    } else if (req.body.Product.Owner.Party.ID == '0123456789124' && req.body.Product.Account.ID == '0123456788') {
    
        // Send the response body.
        res.json({
            "flexcabResponse": {
                "product": {
                    "owner": {
                        "party": {
                            "writtenAuthorityIndicator": null,
                            "streetTypeDescription": null,
                            "streetNumberSuffix": null,
                            "streetNameSuffix": null,
                            "streetName": null,
                            "stateAbbreviation": null,
                            "startStreetNumber": null,
                            "sqlCode": null,
                            "returnCode": null,
                            "rentalorOwnershipIndicator": null,
                            "postCode": null,
                            "portfolioCode": null,
                            "ownershipCode": null,
                            "orgUnit": null,
                            "nameRoleCode": null,
                            "masterID": null,
                            "localityName": null,
                            "invoiceArrangementID": null,
                            "internationalPostCode": null,
                            "errorType": null,
                            "errorDescription": null,
                            "errorCode": null,
                            "endStreetNumber": null,
                            "employerName": null,
                            "driversLicence": null,
                            "dateofBirth": null,
                            "customerTradingName": null,
                            "customerRoleName": null,
                            "customerJobFunction": null,
                            "customerGivenName": null,
                            "customerCourtesyTitle": null,
                            "countryCode": null,
                            "contactTelephoneNumber": null,
                            "contactExtensionNumber": null,
                            "companyNumber": null,
                            "cidn": null,
                            "authorizedRepresentativeEndDate": null,
                            "authorizedRepresentativeDisplayName": null,
                            "addressTypeDescription": null,
                            "addressNumberSuffix": null,
                            "addressNumber": null,
                            "addressName": null,
                            "addressLineTwo": null,
                            "addressLineThree": null,
                            "addressLineOne": null,
                            "abn": null
                        }
                    }
                }
            },
            "flexcabError": {
                "timeStamp": null,
                "processName": null,
                "osName": null,
                "moduleName": null,
                "moduleLocation": null,
                "errorTextLength": null,
                "errorText": "Technical Error",
                "errorCode": "ER-001"
            }
        });
    } else {
    
        // Send the response body.
        res.json({
            "flexcabResponse": {
                "product": {
                    "owner": {
                        "party": {
                            "writtenAuthorityIndicator": null,
                            "streetTypeDescription": null,
                            "streetNumberSuffix": null,
                            "streetNameSuffix": null,
                            "streetName": null,
                            "stateAbbreviation": null,
                            "startStreetNumber": null,
                            "sqlCode": null,
                            "returnCode": null,
                            "rentalorOwnershipIndicator": null,
                            "postCode": null,
                            "portfolioCode": null,
                            "ownershipCode": null,
                            "orgUnit": null,
                            "nameRoleCode": null,
                            "masterID": null,
                            "localityName": null,
                            "invoiceArrangementID": null,
                            "internationalPostCode": null,
                            "errorType": null,
                            "errorDescription": null,
                            "errorCode": null,
                            "endStreetNumber": null,
                            "employerName": null,
                            "driversLicence": null,
                            "dateofBirth": null,
                            "customerTradingName": null,
                            "customerRoleName": null,
                            "customerJobFunction": null,
                            "customerGivenName": null,
                            "customerCourtesyTitle": null,
                            "countryCode": null,
                            "contactTelephoneNumber": null,
                            "contactExtensionNumber": null,
                            "companyNumber": null,
                            "cidn": null,
                            "authorizedRepresentativeEndDate": null,
                            "authorizedRepresentativeDisplayName": null,
                            "addressTypeDescription": null,
                            "addressNumberSuffix": null,
                            "addressNumber": null,
                            "addressName": null,
                            "addressLineTwo": null,
                            "addressLineThree": null,
                            "addressLineOne": null,
                            "abn": null
                        }
                    }
                }
            },
            "flexcabError": {
                "timeStamp": null,
                "processName": null,
                "osName": null,
                "moduleName": null,
                "moduleLocation": null,
                "errorTextLength": null,
                "errorText": null,
                "errorCode": null
            }
        });
    }
})

Sandbox.define('/getNBNSQStub','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    //if (!req.is('application/json')) {
      //  return res.send(400, 'Invalid content type, expected application/json');
    //}
    
    // Set the type of response, sets the content type.
    res.type(Sandbox.config.defaultResponseType);
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json(
    
        {
            "data": {
                "serviceTypeQualifications": [{
                    "serviceType": "Calling",
                    "status": "Available",
                    "technologyType": "Fibre To The Node",
                    "readyForServiceDate": "2016-04-30",
                    "serviceabilityClass": "12",
                    "appointmentRequired": "Yes",
                    "newDevelopmentChargesApply": "No",
                    "locationId": "LOC000035227032",
                    "csaId": "CSA400000001009",
                    "characteristics": [{
                        "name": "Telephony Type",
                        "value": ""
                    }],
                    "providerResources": [{
                        "resourceType": "Copper Pair",
                        "id": "",
                        "status": "",
                        "serviceabilityClass": ""
                    }]
                }, {
                    "serviceType": "Internet",
                    "status": "Available",
                    "technologyType": "Fibre To The Node",
                    "readyForServiceDate": "2016-04-30",
                    "serviceabilityClass": "12",
                    "appointmentRequired": "Yes",
                    "newDevelopmentChargesApply": "No",
                    "locationId": "LOC000035227032",
                    "csaId": "CSA400000001009",
                    "characteristics": [{
                        "name": "TC4 Downstream Upper Rate",
                        "value": "25"
                    }, {
                        "name": "TC4 Downstream Lower Rate",
                        "value": ""
                    }, {
                        "name": "TC4 Upstream Upper Rate",
                        "value": "5"
                    }, {
                        "name": "TC4 Upstream Lower Rate",
                        "value": ""
                    }],
                    "providerResources": [{
                        "resourceType": "Copper Pair",
                        "id": "",
                        "status": "",
                        "serviceabilityClass": ""
                    }]
                }, {
                    "serviceType": "Broadband ADSL",
                    "status": "Available"
                }, {
                    "serviceType": "Broadband Cable",
                    "status": "Available"
                }, {
                    "serviceType": "PSTN",
                    "status": "Available"
                }, {
                    "serviceType": "FOXTEL",
                    "status": "Available"
                }]
            }
        }
    
    );
})

Sandbox.define('/ping','GET', function(req, res){
    res.type(Sandbox.config.defaultResponseType);
    res.status(Sandbox.config.http_success_status_code);
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/MockService','POST', function(req, res){
    res.type(Sandbox.config.defaultResponseType);
    
    res.status(202);
    
    res.json({
        "status": "Accepted"
    });
})

Sandbox.define('/MockService','PUT', function(req, res){
    res.type(Sandbox.config.defaultResponseType);
    
    res.status(202);
    
    res.json({
        "status": "Accepted"
    });
})