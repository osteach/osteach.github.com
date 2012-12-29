var list = {

	"绪论": {
		"介绍": [
			[ "李小龙", "manual/introduction/BruceLee" ],
			[ "调查", "manual/introduction/Research" ],
			[ "什么是开源", "manual/introduction/Opensource" ],
			[ "理念", "manual/introduction/Philosophy"],
			[ "课程介绍", "manual/introduction/Class"],
			[ "参考资料", "manual/introduction/Reference"]

		]
	},
	"开源文化": {
		"课程": [
			[ "软件天生就是自由的", "class/freesoftware/Freesoftware" ],
			[ "RMS 与 GNU", "class/freesoftware/RMS&GNU" ],
			[ "开源软件_理想和现实的折衷", "class/freesoftware/Opensource" ],
			[ "开源软件与自由软件", "class/freesoftware/OS&Free" ],
			[ "软件分类", "class/freesoftware/Classification" ],
			[ "开源软件许可证", "class/freesoftware/License" ]

		]
	},
	"开源运动": {
		"软件应用": [
			[ "Ubuntu", "opensource/software/Ubuntu" ],
			[ "Libreoffice", "opensource/software/Libreoffice" ],
			[ "Nginx", "opensource/software/Nginx" ],
			[ "MySQL", "opensource/software/MySQL" ],
			[ "GCC", "opensource/software/GCC" ],
			[ "浏览器", "opensource/software/Browser" ]
		],

		"人物": [
			[ "阿兰·图灵", "opensource/characters/Turing" ],
			[ "RMS", "opensource/characters/RMS" ]
		]

	}

};

var pages = {};

for ( var section in list ) {

	pages[ section ] = {};

	for ( var category in list[ section ] ) {

		pages[ section ][ category ] = {};

		for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {

			var page = list[ section ][ category ][ i ];
			pages[ section ][ category ][ page[ 0 ] ] = page[ 1 ];

		}

	}

}