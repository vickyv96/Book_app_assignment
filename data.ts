// create an array
export type Book = {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: {
	  title: string;
	  subtitle: string;
	  authors: string[];
	  publisher: string;
	  publishedDate: string;
	  description: string;
	  industryIdentifiers: {
		type: string;
		identifier: string;
	  }[];
	  readingModes: {
		text: boolean;
		image: boolean;
	  };
	  pageCount: number;
	  printType: string;
	  categories: string[];
	  averageRating: number;
	  ratingsCount: number;
	  maturityRating: string;
	  allowAnonLogging: boolean;
	  contentVersion: string;
	  panelizationSummary: {
		containsEpubBubbles: boolean;
		containsImageBubbles: boolean;
	  };
	  imageLinks: {
		smallThumbnail: string;
		thumbnail: string;
	  };
	  language: string;
	  previewLink: string;
	  infoLink: string;
	  canonicalVolumeLink: string;
	};
	saleInfo: {
	  country: string;
	  saleability: string;
	  isEbook: boolean;
	  listPrice: {
		amount: number;
		currencyCode: string;
	  };
	  retailPrice: {
		amount: number;
		currencyCode: string;
	  };
	  buyLink: string;
	  offers: {
		finskyOfferType: number;
		listPrice: {
		  amountInMicros: number;
		  currencyCode: string;
		};
		retailPrice: {
		  amountInMicros: number;
		  currencyCode: string;
		};
	  }[];
	};
	accessInfo: {
	  country: string;
	  viewability: string;
	  embeddable: boolean;
	  publicDomain: boolean;
	  textToSpeechPermission: string;
	  epub: {
		isAvailable: boolean;
		acsTokenLink: string;
	  };
	  pdf: {
		isAvailable: boolean;
		acsTokenLink: string;
	  };
	  webReaderLink: string;
	  accessViewStatus: string;
	  quoteSharingAllowed: boolean;
	};
	searchInfo: {
	  textSnippet: string;
	};
  };

export const BOOK_DATA: Book[] = [
	{
	  "kind": "books#volume",
	  "id": "ypGbBgAAQBAJ",
	  "etag": "UPXbGZJP7e8",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/ypGbBgAAQBAJ",
	  "volumeInfo": {
		"title": "The Psychology Book",
		"subtitle": "Big Ideas Simply Explained",
		"authors": [
		  "DK"
		],
		"publisher": "Dorling Kindersley Ltd",
		"publishedDate": "2015-02-02",
		"description": "Learn about human nature, behaviour and how the mind works with The Psychology Book. Part of the fascinating Big Ideas series, this book tackles tricky topics and themes in a simple and easy to follow format. Learn about Psychology in this overview guide to the subject, brilliant for beginners looking to learn and experts wishing to refresh their knowledge alike! The Psychology Book brings a fresh and vibrant take on the topic through eye-catching graphics and diagrams to immerse yourself in. This captivating book will broaden your understanding of Psychology, with: - More than 100 ground-breaking ideas in this field of science - Packed with facts, charts, timelines and graphs to help explain core concepts - A visual approach to big subjects with striking illustrations and graphics throughout - Easy to follow text makes topics accessible for people at any level of understanding The Psychology Book is the perfect introduction to the science, aimed at adults with an interest in the subject and students wanting to gain more of an overview. Here you'll discover key concepts by psychologists who have significantly enhanced our understanding of the human mind and behaviour. Learn about everyone who's contributed to the big ideas in psychology, incorporating the ideas of today's scientists as well those of the ancient philosophers and pioneers. Your Psychological Questions, Simply Explained If you thought it was difficult to learn psychology and its many concepts, The Psychology Book presents the key ideas in a clear layout. Learn about the key personalities of the 19th and 20th centuries whose work has made significant contributions to our understanding of human behaviour. Superb mind maps and step-by-step summaries explain the line of thought clearly for students of psychology and for anyone with a general interest in understanding the human mind. The Big Ideas Series With millions of copies sold worldwide, The Psychology Book is part of the award-winning Big Ideas series from DK. The series uses striking graphics along with engaging writing, making big topics easy to understand.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9780241202845"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "0241202841"
		  }
		],
		"readingModes": {
		  "text": true,
		  "image": true
		},
		"pageCount": 710,
		"printType": "BOOK",
		"categories": [
		  "Psychology"
		],
		"averageRating": 4.5,
		"ratingsCount": 5,
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": true,
		"contentVersion": "0.7.8.0.preview.3",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=ypGbBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=ypGbBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=ypGbBgAAQBAJ&printsec=frontcover&dq=psychology&hl=&cd=1&source=gbs_api",
		"infoLink": "https://play.google.com/store/books/details?id=ypGbBgAAQBAJ&source=gbs_api",
		"canonicalVolumeLink": "https://play.google.com/store/books/details?id=ypGbBgAAQBAJ"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "FOR_SALE",
		"isEbook": true,
		"listPrice": {
		  "amount": 2120.54,
		  "currencyCode": "INR"
		},
		"retailPrice": {
		  "amount": 2120.54,
		  "currencyCode": "INR"
		},
		"buyLink": "https://play.google.com/store/books/details?id=ypGbBgAAQBAJ&rdid=book-ypGbBgAAQBAJ&rdot=1&source=gbs_api",
		"offers": [
		  {
			"finskyOfferType": 1,
			"listPrice": {
			  "amountInMicros": 2120540000,
			  "currencyCode": "INR"
			},
			"retailPrice": {
			  "amountInMicros": 2120540000,
			  "currencyCode": "INR"
			}
		  }
		]
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "PARTIAL",
		"embeddable": true,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/The_Psychology_Book-sample-epub.acsm?id=ypGbBgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"pdf": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/The_Psychology_Book-sample-pdf.acsm?id=ypGbBgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"webReaderLink": "http://play.google.com/books/reader?id=ypGbBgAAQBAJ&hl=&source=gbs_api",
		"accessViewStatus": "SAMPLE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "Learn about human nature, behaviour and how the mind works with The Psychology Book. Part of the fascinating Big Ideas series, this book tackles tricky topics and themes in a simple and easy to follow format."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "VbySzQEACAAJ",
	  "etag": "yedT7tjwXP4",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/VbySzQEACAAJ",
	  "volumeInfo": {
		"title": "Psychology 2e",
		"authors": [
		  "Rose M. Spielman",
		  "William J. Jenkins",
		  "Marilyn D. Lovett"
		],
		"publishedDate": "2020-04-22",
		"description": "The images in this version are in color. For a less-expensive grayscale version, search for ISBN 9781680923278. Psychology 2e is designed to meet scope and sequence requirements for the single-semester introduction to psychology course. The book offers a comprehensive treatment of core concepts, grounded in both classic studies and current and emerging research. The text also includes coverage of the DSM-5 in examinations of psychological disorders. Psychology 2e incorporates discussions that reflect the diversity within the discipline, as well as the diversity of cultures and communities across the globe.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_10",
			"identifier": "1680923285"
		  },
		  {
			"type": "ISBN_13",
			"identifier": "9781680923285"
		  }
		],
		"readingModes": {
		  "text": false,
		  "image": false
		},
		"pageCount": 784,
		"printType": "BOOK",
		"categories": [
		  "Education"
		],
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": false,
		"contentVersion": "preview-1.0.0",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=VbySzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=VbySzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=VbySzQEACAAJ&dq=psychology&hl=&cd=2&source=gbs_api",
		"infoLink": "http://books.google.co.in/books?id=VbySzQEACAAJ&dq=psychology&hl=&source=gbs_api",
		"canonicalVolumeLink": "https://books.google.com/books/about/Psychology_2e.html?hl=&id=VbySzQEACAAJ"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "NOT_FOR_SALE",
		"isEbook": false
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "NO_PAGES",
		"embeddable": false,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": false
		},
		"pdf": {
		  "isAvailable": false
		},
		"webReaderLink": "http://play.google.com/books/reader?id=VbySzQEACAAJ&hl=&source=gbs_api",
		"accessViewStatus": "NONE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "The book offers a comprehensive treatment of core concepts, grounded in both classic studies and current and emerging research. The text also includes coverage of the DSM-5 in examinations of psychological disorders."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "12wBR6li36cC",
	  "etag": "d5WJeFd+J9s",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/12wBR6li36cC",
	  "volumeInfo": {
		"title": "Positive Psychology And The Body: The Somatopsychic Side To Flourishing",
		"subtitle": "The somatopsychic side to flourishing",
		"authors": [
		  "Hefferon, Kate"
		],
		"publisher": "McGraw-Hill Education (UK)",
		"publishedDate": "2013-07-01",
		"description": "This positive psychology textbook focuses on the importance of the body within optimal functioning and highlights new research in this area.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9780335247714"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "0335247717"
		  }
		],
		"readingModes": {
		  "text": false,
		  "image": true
		},
		"pageCount": 274,
		"printType": "BOOK",
		"categories": [
		  "Psychology"
		],
		"averageRating": 4,
		"ratingsCount": 1,
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": false,
		"contentVersion": "preview-1.0.0",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=12wBR6li36cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=12wBR6li36cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=12wBR6li36cC&printsec=frontcover&dq=psychology&hl=&cd=3&source=gbs_api",
		"infoLink": "http://books.google.co.in/books?id=12wBR6li36cC&dq=psychology&hl=&source=gbs_api",
		"canonicalVolumeLink": "https://books.google.com/books/about/Positive_Psychology_And_The_Body_The_Som.html?hl=&id=12wBR6li36cC"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "NOT_FOR_SALE",
		"isEbook": false
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "PARTIAL",
		"embeddable": true,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": false
		},
		"pdf": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/Positive_Psychology_And_The_Body_The_Som-sample-pdf.acsm?id=12wBR6li36cC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"webReaderLink": "http://play.google.com/books/reader?id=12wBR6li36cC&hl=&source=gbs_api",
		"accessViewStatus": "SAMPLE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "This positive psychology textbook focuses on the importance of the body within optimal functioning and highlights new research in this area."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "TnrrDwAAQBAJ",
	  "etag": "jQrE1O1ibeQ",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/TnrrDwAAQBAJ",
	  "volumeInfo": {
		"title": "The Psychology of Money",
		"subtitle": "Timeless lessons on wealth, greed, and happiness",
		"authors": [
		  "Morgan Housel"
		],
		"publisher": "Harriman House Limited",
		"publishedDate": "2020-09-08",
		"description": "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world people don’t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your own unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important topics.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9780857197696"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "085719769X"
		  }
		],
		"readingModes": {
		  "text": true,
		  "image": true
		},
		"pageCount": 209,
		"printType": "BOOK",
		"categories": [
		  "Business & Economics"
		],
		"averageRating": 4.5,
		"ratingsCount": 6,
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": true,
		"contentVersion": "1.12.14.0.preview.3",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=TnrrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=TnrrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=TnrrDwAAQBAJ&printsec=frontcover&dq=psychology&hl=&cd=4&source=gbs_api",
		"infoLink": "https://play.google.com/store/books/details?id=TnrrDwAAQBAJ&source=gbs_api",
		"canonicalVolumeLink": "https://play.google.com/store/books/details?id=TnrrDwAAQBAJ"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "FOR_SALE",
		"isEbook": true,
		"listPrice": {
		  "amount": 1440.39,
		  "currencyCode": "INR"
		},
		"retailPrice": {
		  "amount": 720.2,
		  "currencyCode": "INR"
		},
		"buyLink": "https://play.google.com/store/books/details?id=TnrrDwAAQBAJ&rdid=book-TnrrDwAAQBAJ&rdot=1&source=gbs_api",
		"offers": [
		  {
			"finskyOfferType": 1,
			"listPrice": {
			  "amountInMicros": 1440390000,
			  "currencyCode": "INR"
			},
			"retailPrice": {
			  "amountInMicros": 720200000,
			  "currencyCode": "INR"
			}
		  }
		]
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "PARTIAL",
		"embeddable": true,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/The_Psychology_of_Money-sample-epub.acsm?id=TnrrDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"pdf": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/The_Psychology_of_Money-sample-pdf.acsm?id=TnrrDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"webReaderLink": "http://play.google.com/books/reader?id=TnrrDwAAQBAJ&hl=&source=gbs_api",
		"accessViewStatus": "SAMPLE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important topics."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "uAiQEAAAQBAJ",
	  "etag": "hUXKIVpqx5k",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/uAiQEAAAQBAJ",
	  "volumeInfo": {
		"title": "Integral Psychology",
		"subtitle": "Consciousness, Spirit, Psychology, Therapy",
		"authors": [
		  "Ken Wilber"
		],
		"publisher": "National Geographic Books",
		"publishedDate": "2000-05-16",
		"description": "A leader in transpersonal psychology presents the first truly integrative model of spiritual consciousness and Western developmental psychology The goal of an “integral psychology” is to honor and embrace every legitimate aspect of human consciousness under one roof. Drawing on hundreds of sources—Eastern and Western, ancient and modern—Wilber creates a psychological model that includes waves of development, streams of development, states of consciousness, and the self, and follows the course of each from subconscious to self-conscious to superconscious. Included in the book are charts correlating over a hundred psychological and spiritual schools from around the world, including Kabbalah, Vedanta, Plotinus, Teresa of Ávila, Aurobindo, Theosophy, and modern theorists such as Jean Piaget, Erik Erikson, Jane Loevinger, Lawrence Kohlberg, Carol Gilligan, Erich Neumann, and Jean Gebser. Integral Psychology is Wilber's most ambitious psychological system to date and is already being called a landmark study in human development.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9781570625541"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "1570625549"
		  }
		],
		"readingModes": {
		  "text": true,
		  "image": false
		},
		"pageCount": 0,
		"printType": "BOOK",
		"categories": [
		  "Psychology"
		],
		"averageRating": 4,
		"ratingsCount": 2,
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": false,
		"contentVersion": "preview-1.0.0",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=uAiQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=uAiQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=uAiQEAAAQBAJ&dq=psychology&hl=&cd=5&source=gbs_api",
		"infoLink": "http://books.google.co.in/books?id=uAiQEAAAQBAJ&dq=psychology&hl=&source=gbs_api",
		"canonicalVolumeLink": "https://books.google.com/books/about/Integral_Psychology.html?hl=&id=uAiQEAAAQBAJ"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "NOT_FOR_SALE",
		"isEbook": false
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "NO_PAGES",
		"embeddable": false,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": false
		},
		"pdf": {
		  "isAvailable": false
		},
		"webReaderLink": "http://play.google.com/books/reader?id=uAiQEAAAQBAJ&hl=&source=gbs_api",
		"accessViewStatus": "NONE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "Included in the book are charts correlating over a hundred psychological and spiritual schools from around the world, including Kabbalah, Vedanta, Plotinus, Teresa of Ávila, Aurobindo, Theosophy, and modern theorists such as Jean Piaget, ..."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "pX7p3AIs25kC",
	  "etag": "qbDga13xoyE",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/pX7p3AIs25kC",
	  "volumeInfo": {
		"title": "Handbook of Psychology, Industrial and Organizational Psychology",
		"authors": [
		  "Irving B. Weiner",
		  "Neal W. Schmitt",
		  "Scott Highhouse"
		],
		"publisher": "John Wiley & Sons",
		"publishedDate": "2012-10-16",
		"description": "Psychology is of interest to academics from many fields, as well as to the thousands of academic and clinical psychologists and general public who can't help but be interested in learning more about why humans think and behave as they do. This award-winning twelve-volume reference covers every aspect of the ever-fascinating discipline of psychology and represents the most current knowledge in the field. This ten-year revision now covers discoveries based in neuroscience, clinical psychology's new interest in evidence-based practice and mindfulness, and new findings in social, developmental, and forensic psychology.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9780470768877"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "0470768878"
		  }
		],
		"readingModes": {
		  "text": false,
		  "image": true
		},
		"pageCount": 820,
		"printType": "BOOK",
		"categories": [
		  "Psychology"
		],
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": false,
		"contentVersion": "1.3.3.0.preview.1",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=pX7p3AIs25kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=pX7p3AIs25kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=pX7p3AIs25kC&printsec=frontcover&dq=psychology&hl=&cd=6&source=gbs_api",
		"infoLink": "http://books.google.co.in/books?id=pX7p3AIs25kC&dq=psychology&hl=&source=gbs_api",
		"canonicalVolumeLink": "https://books.google.com/books/about/Handbook_of_Psychology_Industrial_and_Or.html?hl=&id=pX7p3AIs25kC"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "NOT_FOR_SALE",
		"isEbook": false
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "PARTIAL",
		"embeddable": true,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": false
		},
		"pdf": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/Handbook_of_Psychology_Industrial_and_Or-sample-pdf.acsm?id=pX7p3AIs25kC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"webReaderLink": "http://play.google.com/books/reader?id=pX7p3AIs25kC&hl=&source=gbs_api",
		"accessViewStatus": "SAMPLE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "Psychology is of interest to academics from many fields, as well as to the thousands of academic and clinical psychologists and general public who can&#39;t help but be interested in learning more about why humans think and behave as they do."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "lV7hBwAAQBAJ",
	  "etag": "/ywHMjB4QSY",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/lV7hBwAAQBAJ",
	  "volumeInfo": {
		"title": "Clinical Psychology",
		"subtitle": "Historical and Research Foundations",
		"authors": [
		  "C. Eugene Walker"
		],
		"publisher": "Springer Science & Business Media",
		"publishedDate": "2013-11-21",
		"description": "The purpose of this book is to provide the reader with a survey of some of the major areas of clinical psychology. No attempt has been made to include every area relevant to clinical psychology; the choices are selective but represent the wide range of areas touched by clinical psychologists. For some years I have felt the need for a book that provides students with more of a historical introduction and context from which to view current clinical psychology than is included in most textbooks. The issues and problems of clinical psychology have been with us since the beginning of time; however, most psychological literature is written with the bias that anything older than five or ten years is not relevant. Those who attempt to take a long-range view of clinical psychology are sometimes able to recall the early development of the field in the 1930s and 1940s. In this text, I asked the authors to begin with a brief survey of ancient and medieval history to set the stage for a discussion of current research and developments in the field. I hope that a presentation of this sort will provide the reader-whether advanced undergraduate, graduate, or professional-with a sense of perspective and context from which to view and understand clinical psychology.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9781475797152"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "147579715X"
		  }
		],
		"readingModes": {
		  "text": false,
		  "image": true
		},
		"pageCount": 540,
		"printType": "BOOK",
		"categories": [
		  "Psychology"
		],
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": false,
		"contentVersion": "1.1.1.0.preview.1",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=lV7hBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=lV7hBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=lV7hBwAAQBAJ&printsec=frontcover&dq=psychology&hl=&cd=7&source=gbs_api",
		"infoLink": "https://play.google.com/store/books/details?id=lV7hBwAAQBAJ&source=gbs_api",
		"canonicalVolumeLink": "https://play.google.com/store/books/details?id=lV7hBwAAQBAJ"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "FOR_SALE",
		"isEbook": true,
		"listPrice": {
		  "amount": 12626,
		  "currencyCode": "INR"
		},
		"retailPrice": {
		  "amount": 12626,
		  "currencyCode": "INR"
		},
		"buyLink": "https://play.google.com/store/books/details?id=lV7hBwAAQBAJ&rdid=book-lV7hBwAAQBAJ&rdot=1&source=gbs_api",
		"offers": [
		  {
			"finskyOfferType": 1,
			"listPrice": {
			  "amountInMicros": 12626000000,
			  "currencyCode": "INR"
			},
			"retailPrice": {
			  "amountInMicros": 12626000000,
			  "currencyCode": "INR"
			}
		  }
		]
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "PARTIAL",
		"embeddable": true,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": false
		},
		"pdf": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/Clinical_Psychology-sample-pdf.acsm?id=lV7hBwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"webReaderLink": "http://play.google.com/books/reader?id=lV7hBwAAQBAJ&hl=&source=gbs_api",
		"accessViewStatus": "SAMPLE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "The purpose of this book is to provide the reader with a survey of some of the major areas of clinical psychology."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "LKujzgEACAAJ",
	  "etag": "nw+4ROjhg0k",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/LKujzgEACAAJ",
	  "volumeInfo": {
		"title": "The Little Book of Psychology",
		"subtitle": "An Introduction to the Key Psychologists and Theories You Need to Know",
		"authors": [
		  "Emily Ralls",
		  "Caroline Riggs"
		],
		"publisher": "Viva Editions",
		"publishedDate": "2021-09-28",
		"description": "If you want to know your Freud from your Jung and your Milgram from your Maslow, strap in for this whirlwind tour of the highlights of psychology. Including accessible primers on: The early thinkers who contributed to psychological ideas and the birth of modern psychology Famous (and often controversial) experiments and their repercussions What psychology can teach us about memory, language, conformity, reasoning and emotions The ethics of psychological studies Recent developments in the modern fields of evolutionary and cyber psychology. This illuminating little book will introduce you to the key thinkers, themes and theories you need to know to understand how the study of mind and behavior has sculpted the world we live in and the way we think today.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_10",
			"identifier": "1632280787"
		  },
		  {
			"type": "ISBN_13",
			"identifier": "9781632280787"
		  }
		],
		"readingModes": {
		  "text": false,
		  "image": false
		},
		"pageCount": 128,
		"printType": "BOOK",
		"categories": [
		  "Psychology"
		],
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": false,
		"contentVersion": "preview-1.0.0",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=LKujzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=LKujzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=LKujzgEACAAJ&dq=psychology&hl=&cd=8&source=gbs_api",
		"infoLink": "http://books.google.co.in/books?id=LKujzgEACAAJ&dq=psychology&hl=&source=gbs_api",
		"canonicalVolumeLink": "https://books.google.com/books/about/The_Little_Book_of_Psychology.html?hl=&id=LKujzgEACAAJ"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "NOT_FOR_SALE",
		"isEbook": false
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "NO_PAGES",
		"embeddable": false,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": false
		},
		"pdf": {
		  "isAvailable": false
		},
		"webReaderLink": "http://play.google.com/books/reader?id=LKujzgEACAAJ&hl=&source=gbs_api",
		"accessViewStatus": "NONE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "This illuminating little book will introduce you to the key thinkers, themes and theories you need to know to understand how the study of mind and behavior has sculpted the world we live in and the way we think today."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "3aZ-DwAAQBAJ",
	  "etag": "fSJavFsMrRo",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/3aZ-DwAAQBAJ",
	  "volumeInfo": {
		"title": "A Degree in a Book: Psychology",
		"subtitle": "Everything You Need to Know to Master the Subject - in One Book!",
		"authors": [
		  "Alan Porter"
		],
		"publisher": "Arcturus Publishing",
		"publishedDate": "2018-12-15",
		"description": "A perfect introduction for students and laypeople alike, A Degree in a Book: Psychology provides you with all the concepts you need to understand the fundamental issues. Filled with helpful diagrams, suggestions for further reading, and easily digestible features on the history of psychology, this book makes understanding the human mind easier than ever. Including the theories of Francis Galton, Sigmund Freud, Ivan Pavlov, and many more, it covers the whole range of psychological research. By the time you finish reading this book, you will be able to answer questions such as: • How do we learn? • Do groups make better decisions than individuals? • How do we study the living brain? • What are the components of personality?",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9781789504330"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "1789504333"
		  }
		],
		"readingModes": {
		  "text": true,
		  "image": true
		},
		"pageCount": 357,
		"printType": "BOOK",
		"categories": [
		  "Psychology"
		],
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": true,
		"contentVersion": "1.6.6.0.preview.3",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=3aZ-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=3aZ-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=3aZ-DwAAQBAJ&printsec=frontcover&dq=psychology&hl=&cd=9&source=gbs_api",
		"infoLink": "https://play.google.com/store/books/details?id=3aZ-DwAAQBAJ&source=gbs_api",
		"canonicalVolumeLink": "https://play.google.com/store/books/details?id=3aZ-DwAAQBAJ"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "FOR_SALE",
		"isEbook": true,
		"listPrice": {
		  "amount": 200,
		  "currencyCode": "INR"
		},
		"retailPrice": {
		  "amount": 140,
		  "currencyCode": "INR"
		},
		"buyLink": "https://play.google.com/store/books/details?id=3aZ-DwAAQBAJ&rdid=book-3aZ-DwAAQBAJ&rdot=1&source=gbs_api",
		"offers": [
		  {
			"finskyOfferType": 1,
			"listPrice": {
			  "amountInMicros": 200000000,
			  "currencyCode": "INR"
			},
			"retailPrice": {
			  "amountInMicros": 140000000,
			  "currencyCode": "INR"
			}
		  }
		]
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "PARTIAL",
		"embeddable": true,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/A_Degree_in_a_Book_Psychology-sample-epub.acsm?id=3aZ-DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"pdf": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/A_Degree_in_a_Book_Psychology-sample-pdf.acsm?id=3aZ-DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"webReaderLink": "http://play.google.com/books/reader?id=3aZ-DwAAQBAJ&hl=&source=gbs_api",
		"accessViewStatus": "SAMPLE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "By the time you finish reading this book, you will be able to answer questions such as: • How do we learn? • Do groups make better decisions than individuals? • How do we study the living brain? • What are the components of ..."
	  }
	},
	{
	  "kind": "books#volume",
	  "id": "HyQgZTQnAtAC",
	  "etag": "Eh85F6pIuYE",
	  "selfLink": "https://www.googleapis.com/books/v1/volumes/HyQgZTQnAtAC",
	  "volumeInfo": {
		"title": "ADVANCED EDUCATIONAL PSYCHOLOGY",
		"authors": [
		  "S. K. MANGAL"
		],
		"publisher": "PHI Learning Pvt. Ltd.",
		"publishedDate": "2002-01-01",
		"description": "This revised and expanded edition is a sequel to the first edition which was warmly received by the student and teaching community for its indepth analysis and refreshing approach to the subject. Psychology of Individual differences Transfer of Learning or Training Emotional Development and Emotional Intelligence Learning Disabilities and Learning Disabled Children Beginning with an introduction to the nature and scope, and the various schools of psychology, the book dis-cusses the systems propounded by Freud, Adler, Jung and Piaget, taking into account their critical importance to the subject. It then focuses on the psychology of growth and development, psychology of individual differences, motivation, attention and personality, with an emphasis on the individual's attitude towards learning, and the factors influencing learning. The text also elaborates the nature and theories of learning and the aspects of memory such as remembering and forgetting. The cognitive aspect, i.e. intelligence, and vital topics like creativity and the psychology of thinking, reasoning and problem-solving have been accorded due promi-nence. A detailed discussion on exceptional children and learning disabled children together with the educational measures for overcoming such disabilities is also included. The text concludes with an important aspect of human behaviour, namely, adjustment. Interspersed with examples, illustrations and tables, this text is ideally suited for postgraduate students of education and psychology. It can also be profitably used by teachers, teacher-educators, guidance and counselling personnel, and administrators of educational institutions.",
		"industryIdentifiers": [
		  {
			"type": "ISBN_13",
			"identifier": "9788120320383"
		  },
		  {
			"type": "ISBN_10",
			"identifier": "8120320387"
		  }
		],
		"readingModes": {
		  "text": true,
		  "image": true
		},
		"pageCount": 536,
		"printType": "BOOK",
		"categories": [
		  "Education"
		],
		"averageRating": 2.5,
		"ratingsCount": 4,
		"maturityRating": "NOT_MATURE",
		"allowAnonLogging": true,
		"contentVersion": "1.1.1.0.preview.3",
		"panelizationSummary": {
		  "containsEpubBubbles": false,
		  "containsImageBubbles": false
		},
		"imageLinks": {
		  "smallThumbnail": "http://books.google.com/books/content?id=HyQgZTQnAtAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		  "thumbnail": "http://books.google.com/books/content?id=HyQgZTQnAtAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		"language": "en",
		"previewLink": "http://books.google.co.in/books?id=HyQgZTQnAtAC&printsec=frontcover&dq=psychology&hl=&cd=10&source=gbs_api",
		"infoLink": "https://play.google.com/store/books/details?id=HyQgZTQnAtAC&source=gbs_api",
		"canonicalVolumeLink": "https://play.google.com/store/books/details?id=HyQgZTQnAtAC"
	  },
	  "saleInfo": {
		"country": "IN",
		"saleability": "FOR_SALE",
		"isEbook": true,
		"listPrice": {
		  "amount": 531,
		  "currencyCode": "INR"
		},
		"retailPrice": {
		  "amount": 265.5,
		  "currencyCode": "INR"
		},
		"buyLink": "https://play.google.com/store/books/details?id=HyQgZTQnAtAC&rdid=book-HyQgZTQnAtAC&rdot=1&source=gbs_api",
		"offers": [
		  {
			"finskyOfferType": 1,
			"listPrice": {
			  "amountInMicros": 531000000,
			  "currencyCode": "INR"
			},
			"retailPrice": {
			  "amountInMicros": 265500000,
			  "currencyCode": "INR"
			}
		  }
		]
	  },
	  "accessInfo": {
		"country": "IN",
		"viewability": "PARTIAL",
		"embeddable": true,
		"publicDomain": false,
		"textToSpeechPermission": "ALLOWED",
		"epub": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/ADVANCED_EDUCATIONAL_PSYCHOLOGY-sample-epub.acsm?id=HyQgZTQnAtAC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"pdf": {
		  "isAvailable": true,
		  "acsTokenLink": "http://books.google.co.in/books/download/ADVANCED_EDUCATIONAL_PSYCHOLOGY-sample-pdf.acsm?id=HyQgZTQnAtAC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
		},
		"webReaderLink": "http://play.google.com/books/reader?id=HyQgZTQnAtAC&hl=&source=gbs_api",
		"accessViewStatus": "SAMPLE",
		"quoteSharingAllowed": false
	  },
	  "searchInfo": {
		"textSnippet": "The text concludes with an important aspect of human behaviour, namely, adjustment. Interspersed with examples, illustrations and tables, this text is ideally suited for postgraduate students of education and psychology."
	  }
	}
  ];