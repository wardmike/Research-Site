var  predict = {
	x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116],
	y: [-0.00026368, -0.00173453, 0.00287750, -0.00109385, 0.00190332, 0.00007786, -0.00007690, 0.00064269, -0.00016633, 0.00379236, -0.00036715, -0.00339932, 0.00239243, -0.00005309, -0.00141656, 0.00096113, 0.00020468, 0.00061191, 0.00208383, -0.00163938, 0.00272360, -0.00047157, -0.00164811, 0.00046723, -0.00490572, 0.00411090, 0.00037992, 0.00215408, -0.00175023, 0.00240226, -0.00050829, 0.00026850, 0.00255360, -0.00227333, 0.00074273, 0.00034790, 0.00029990, 0.00035518, 0.00093901, 0.00023229, 0.00030398, 0.00172453, -0.00108556, 0.00152075, 0.00000431, -0.00300753, -0.00129586, 0.00335215, -0.00075306, 0.00268307, -0.00121363, -0.00001629, 0.00116535, -0.00036764, 0.00052649, 0.00139765, 0.00004249, 0.00097135, -0.00044352, -0.00050047, 0.00209896, -0.00144053, 0.00175090, -0.00072175, 0.00068004, 0.00102088, -0.00109235, 0.00150540, -0.00026943, -0.00034969, 0.00167117, -0.00045015, -0.00067641, -0.00031257, 0.00126019, 0.00126578, -0.00022134, -0.00093472, 0.00096774, 0.00007381, 0.00042612, 0.00011690, 0.00065671, 0.00038788, 0.00069693, 0.00031249, -0.00073822, -0.00014290, 0.00044470, 0.00066687, 0.00043614, -0.00104331, 0.00215107, -0.00071955, 0.00075097, 0.00038587, -0.00023420, 0.00070970, -0.00052402, 0.00054920, 0.00214413, -0.00077682, 0.00138479, -0.00015132, 0.00045598, 0.00039256, 0.00019924, -0.00019957, 0.00030600, -0.00006358, 0.00036285, 0.00086404, -0.00031227, 0.00081480, -0.00010833, -0.00008764, 0.00042333, 0.00038096, 0.00020422, 0.00062084, 0.00000399, 0.00036873, 0.00056759, 0.00033216, -0.00026280, 0.00084171, 0.00210777, 0.00005079, -0.00033084, 0.00093763, -0.00024615, 0.00019640, -0.00036638, -0.00047900, 0.00061585, 0.00120173, -0.00009161, 0.00077245, 0.00045650, 0.00102487, -0.00048080, 0.00028405, 0.00082016, -0.00045277, 0.00097845, 0.00014719, 0.00049523, -0.00020789, 0.00044718, -0.00111091, 0.00051816, 0.00015840, 0.00105438, 0.00021504, 0.00061920, 0.00058464, 0.00050148, -0.00006872, 0.00002479, 0.00064212, 0.00027415, 0.00054683, -0.00010742, 0.00033358, 0.00054161, 0.00031824, -0.00016318, 0.00083330, 0.00014932, 0.00044458, 0.00025395, 0.00026906, 0.00058515, -0.00007536, 0.00036511, 0.00049908, 0.00026572, 0.00081964, 0.00103390, -0.00007704, 0.00021671, 0.00016760, 0.00029505, 0.00029533, 0.00014605, 0.00007343, 0.00034228, -0.00037460, 0.00046937, 0.00039935, -0.00005743, 0.00034880, 0.00056825, 0.00060525, 0.00032812, 0.00012060, -0.00013217, -0.00021593, 0.00063381, 0.00058323, 0.00102401, 0.00075745, 0.00021642, -0.00020508, -0.00041154, 0.00067259, 0.00045858, 0.00051320, 0.00062783, -0.00027370, 0.00055759, 0.00147336, -0.00046596, 0.00078166, 0.00003070, 0.00007242, 0.00014888, 0.00089514, 0.00015780, 0.00079177, -0.00016207, 0.00115722, -0.00029412, 0.00065799, -0.00037479, 0.00056897, -0.00004027, 0.00028367, -0.00005212, 0.00035090, -0.00034030, 0.00061348, 0.00098653, 0.00008184, 0.00044236, 0.00012225, 0.00032018, 0.00096321, 0.00002600, 0.00055917, 0.00052800, -0.00015584, 0.00062075, -0.00038302, 0.00044857, -0.00005881, 0.00009915, 0.00020299, -0.00022696, 0.00110661, 0.00000484, 0.00049837, 0.00036782, 0.00038703, 0.00039040, -0.00006492, 0.00029197, 0.00061674, 0.00015648, 0.00058834, 0.00060386, 0.00020948, 0.00029755, 0.00001585, 0.00020879, 0.00098534, 0.00021207, 0.00022829, 0.00026710, 0.00034836, 0.00025973, 0.00055694, 0.00022701, -0.00020941, 0.00034358, -0.00002618, 0.00016719, 0.00039821, 0.00027931, 0.00018588, 0.00044449, 0.00038604, 0.00031403, 0.00023301, 0.00014763, 0.00010654, 0.00093184, 0.00002944, 0.00043941, 0.00070184, 0.00049985, 0.00030883, 0.00017864, 0.00026760, -0.00002912, 0.00000709, 0.00018439, 0.00037740, 0.00085609, 0.00034031, 0.00103971, -0.00005914, 0.00026009, 0.00046661, 0.00000936, 0.00026840, 0.00025977, -0.00045168, 0.00036938, 0.00050516, 0.00036206, 0.00041010, -0.00002973, 0.00037941, 0.00046246, 0.00010437, 0.00012580, 0.00031948, 0.00016067, 0.00014220, 0.00044739, 0.00056434, 0.00044480, 0.00029045, 0.00029518, 0.00024237, 0.00025988, 0.00033784, 0.00034651, 0.00065170, 0.00047512, 0.00009559, 0.00006418, 0.00063609, 0.00025487, 0.00056228, 0.00016698, 0.00058045, 0.00003868, 0.00008568, 0.00050148, 0.00014637, 0.00005861, 0.00035466, 0.00020198, 0.00031897, 0.00044516, 0.00057357, 0.00057425, 0.00047620, 0.00015315, 0.00043191, 0.00016920, 0.00028640, 0.00043925, 0.00022988, 0.00008318, 0.00019282, 0.00011373, 0.00041988, 0.00018398, 0.00024019, 0.00025120, 0.00021286, 0.00038198, -0.00049576, -0.00004657, 0.00055191, 0.00019582, 0.00063418, 0.00005522, -0.00004056, 0.00090067, -0.00026569, 0.00105299, 0.00015740, 0.00021482, 0.00041904, 0.00010791, 0.00033785, 0.00010274, 0.00069040, 0.00035372, 0.00061560, 0.00040412, 0.00005622, 0.00033054, 0.00011525, 0.00023796, 0.00060965, 0.00001077, -0.00009887, -0.00045821, 0.00024559, 0.00050969, 0.00032505, 0.00049894, 0.00005172, 0.00036943, 0.00030911, 0.00047076, 0.00119427, 0.00047530, 0.00058986, 0.00021365, 0.00078887, 0.00012449, -0.00005218, -0.00006568, 0.00033832, 0.00007624, 0.00015240, 0.00038333, 0.00046401, 0.00062565, 0.00036235, 0.00026892, 0.00060502, 0.00069557, -0.00031818, 0.00010066, 0.00033861, 0.00027893, -0.00007387, 0.00063023, 0.00030500, 0.00008905, 0.00037944, 0.00012647, 0.00037660, 0.00030340, 0.00016828, 0.00033643, 0.00064388, 0.00044163, 0.00030119, 0.00047693, 0.00039516, 0.00018589, 0.00000329, 0.00024544, 0.00028574, 0.00020092, 0.00023192, 0.00027657, 0.00028992, 0.00037445, 0.00039974, 0.00041911, 0.00000289, 0.00037884, -0.00015849, 0.00043552, -0.00014390, 0.00047445, 0.00043741, 0.00078592, 0.00029729, 0.00042131, 0.00016775, 0.00041597, 0.00038779, 0.00017078, 0.00017312, 0.00037101, 0.00025263, 0.00042707, 0.00041905, 0.00033966, 0.00020531, 0.00023228, 0.00020786, 0.00020836, 0.00007750, 0.00050357, 0.00014771, 0.00038242, 0.00009336, 0.00040132, 0.00039643, 0.00061323, -0.00001872, 0.00051741, 0.00094989, 0.00041184, 0.00062549, -0.00020601, 0.00040662, -0.00006215, 0.00033578, 0.00010507, 0.00023691, 0.00011171, 0.00028069, 0.00037996, 0.00025105, 0.00024515, 0.00024310, 0.00029958, 0.00027940, 0.00038570, -0.00024293, 0.00058211, 0.00038743, -0.00018574, 0.00038716, 0.00023067, 0.00018434, -0.00041575, 0.00036902, -0.00020868, 0.00086618, 0.00108989, 0.00034894, 0.00042343, -0.00012890, 0.00029735, 0.00035189, -0.00051880, 0.00015153, 0.00059290, 0.00070448, 0.00074621, 0.00067803, 0.00029483, 0.00025722, 0.00099000, 0.00015301, 0.00057830, -0.00081918, 0.00072378, 0.00007036, 0.00042780, 0.00027411, -0.00054986, -0.00011778, 0.00080698, 0.00015113, 0.00034930, 0.00092904, 0.00036693, 0.00044942, 0.00000064, 0.00040433, 0.00033455, -0.00059091, 0.00044289, 0.00059722, 0.00038254, 0.00037532, 0.00030594, -0.00000975, 0.00022638, 0.00007812, 0.00065631, 0.00000982, 0.00075451, 0.00091796, 0.00020184, 0.00014931, 0.00059702, 0.00073657, 0.00033709, 0.00051230, 0.00019893, 0.00051855, -0.00041509, -0.00010745, -0.00009876, 0.00020434, 0.00061574, 0.00034134, 0.00082639, 0.00015506, 0.00032088, -0.00012621, 0.00031073, 0.00048205, 0.00048665, 0.00028219, 0.00049723, 0.00027756, 0.00031375, 0.00028659, 0.00036789, 0.00020617, 0.00037549, 0.00053191, 0.00047161, 0.00036700, 0.00016320, 0.00050060, 0.00001299, 0.00030653, 0.00025460, -0.00082839, 0.00043975, 0.00035623, 0.00042447, 0.00045770, -0.00004007, 0.00045710, 0.00030488, 0.00042669, 0.00068130, 0.00010533, 0.00037134, 0.00008886, -0.00027293, 0.00041555, 0.00019398, 0.00007609, 0.00087250, 0.00033344, 0.00039714, 0.00096408, 0.00033468, 0.00029572, 0.00022408, -0.00027462, 0.00035422, 0.00031595, 0.00046816, 0.00017618, 0.00029349, 0.00033146, 0.00013310, 0.00027907, 0.00036058, 0.00062798, 0.00059359, -0.00001977, 0.00013273, 0.00056343, 0.00032463, 0.00027257, 0.00038660, 0.00054656, 0.00065264, -0.00024030, 0.00025548, 0.00068641, 0.00020398, 0.00075826, -0.00031213, 0.00046341, 0.00015094, 0.00011130, -0.00034656, 0.00063980, 0.00033969, 0.00011827, 0.00040690, 0.00071743, 0.00041597, 0.00031946, 0.00055341, 0.00004391, 0.00043579, 0.00036806, 0.00026295, 0.00019701, 0.00037941, 0.00045471, 0.00039113, 0.00063500, 0.00008689, 0.00076993, 0.00053316, 0.00024529, 0.00015220, 0.00022096, 0.00040662, 0.00017012, 0.00014687, -0.00021046, 0.00041822, 0.00032980, 0.00011481, 0.00058923, 0.00031831, 0.00049248, 0.00003802, 0.00004850, 0.00016378, 0.00032721, 0.00041024, 0.00036339, 0.00035670, 0.00036716, 0.00036372, 0.00032984, 0.00032218, 0.00038348, 0.00009426, 0.00043450, 0.00015183, 0.00028197, 0.00033611, -0.00024439, 0.00018985, 0.00053308, 0.00066070, 0.00039199, 0.00020005, 0.00053961, 0.00040746, 0.00048968, 0.00025411, 0.00006837, 0.00030248, 0.00055120, -0.00016047, 0.00080198, 0.00031900, 0.00024994, -0.00008982, 0.00059430, 0.00015428, 0.00018695, 0.00043581, -0.00007977, 0.00033729, 0.00021952, 0.00026752, 0.00036136, 0.00011648, 0.00047559, 0.00037031, 0.00041555, 0.00036381, 0.00033785, 0.00025622, -0.00015101, 0.00029925, 0.00030889, 0.00057061, 0.00024252, 0.00056268, 0.00034547, 0.00009236, 0.00037175, -0.00042327, 0.00045784, -0.00016396, 0.00006658, 0.00051451, 0.00008002, 0.00072345, 0.00040908, -0.00004923, 0.00062958, 0.00056675, 0.00063558, -0.00004070, 0.00029628, 0.00022173, 0.00037927, 0.00031602, 0.00016700, -0.00000441, 0.00027789, 0.00030464, 0.00076879, -0.00006236, 0.00097687, -0.00031466, 0.00039506, 0.00030818, 0.00019462, 0.00021491, 0.00036374, -0.00014025, 0.00086812, -0.00037247, 0.00048091, 0.00053962, 0.00121629, 0.00013605, 0.00029314, 0.00066420, -0.00004008, 0.00025465, 0.00025369, -0.00038499, 0.00072579, 0.00054564, 0.00043096, 0.00115407, -0.00096738, 0.00164127, 0.00006340, -0.00013304, 0.00001667, 0.00027737, 0.00040232, -0.00068087, 0.00065593, 0.00027827, 0.00027261, 0.00037888, 0.00038876, 0.00037044, 0.00036653, 0.00068506, 0.00058918, 0.00024861, 0.00028088, -0.00023372, 0.00062215, 0.00041814, 0.00026976, 0.00019035, 0.00022726, 0.00151301, -0.00004691, -0.00018367, 0.00101854, -0.00021017, 0.00002062, 0.00038451, 0.00025740, 0.00015381, 0.00026140, 0.00020158, 0.00024625, 0.00066560, 0.00031927, 0.00030771, -0.00078470, 0.00000772, 0.00090250, 0.00041669, 0.00017765, 0.00069202, 0.00048509, 0.00032061, 0.00052464, 0.00000912, 0.00033695, 0.00084743, -0.00001888, 0.00015210, 0.00025689, 0.00052665, 0.00085547, -0.00038959, 0.00017885, 0.00027940, 0.00031880, 0.00062305, 0.00010040, 0.00032693, 0.00038194, 0.00029688, -0.00016633, 0.00048083, 0.00053740, 0.00003463, 0.00036895, -0.00003469, 0.00038241, -0.00047360, -0.00028249, -0.00022678, 0.00064395, 0.00022428, 0.00069793, 0.00062317, 0.00017465, 0.00043175, -0.00035690, 0.00055098, 0.00061147, 0.00076572, 0.00037701, 0.00015363, -0.00010564, 0.00011566, 0.00037478, 0.00007173, 0.00046927, 0.00111035, 0.00016599, 0.00034843, 0.00085772, 0.00031683, -0.00020138, 0.00048275, 0.00006961, 0.00012796, 0.00052335, 0.00057714, 0.00025133, 0.00053404, 0.00022576, -0.00011297, 0.00039639, 0.00025140, 0.00035420, -0.00008048, 0.00052581, 0.00031706, 0.00008064, 0.00057833, 0.00031355, 0.00043621, 0.00005762, 0.00001335, 0.00038719, -0.00093854, 0.00000390, 0.00076854, 0.00026833, 0.00054819, 0.00049377, -0.00092457, 0.00188148, -0.00041986, 0.00232284, 0.00043914, 0.00128133, -0.00150055, 0.00033233, 0.00085746, 0.00018834, 0.00019732, 0.00011747, -0.00036730, -0.00028321, 0.00028123, 0.00089248, 0.00042225, 0.00036332, 0.00081982, 0.00064263, -0.00057909, 0.00048902, -0.00018737, 0.00071660, 0.00030136, -0.00041610, -0.00050810, 0.00088656, 0.00042973, 0.00021878, 0.00014463, 0.00011496, 0.00158001, 0.00075089, -0.00047132, 0.00053991, 0.00027871, -0.00100174, 0.00072332, 0.00078653, 0.00076492, -0.00002417, 0.00052691, 0.00058105, 0.00116433, 0.00010187, -0.00037809, 0.00156882, 0.00000496, 0.00004695, 0.00118805, -0.00166453, -0.00010184, 0.00066689, 0.00051909, 0.00007929, 0.00092888, 0.00002225, -0.00061034, 0.00087389, -0.00021644, 0.00047800, 0.00024797, 0.00035278, 0.00019951, 0.00044523, 0.00019470, 0.00036414, 0.00115903, 0.00025554, -0.00000826, 0.00049610, 0.00096117, -0.00009307, 0.00041760, -0.00017688, 0.00038882, 0.00033379, 0.00044692, 0.00055121, 0.00068595, -0.00053385, 0.00078386, 0.00014639, 0.00075807, 0.00025731, 0.00021973, 0.00027075, 0.00023063, -0.00059356, 0.00070488, 0.00029626, 0.00007594, 0.00042993, -0.00001448, 0.00041944, 0.00034707, 0.00080130, 0.00008518, 0.00035879, 0.00054640, 0.00019117, 0.00062755, -0.00012013, 0.00078449, 0.00085771, -0.00057278, 0.00033411, 0.00115797, 0.00137892, -0.00067972, 0.00082657, -0.00037589, 0.00126848, 0.00067609, 0.00050689, -0.00007843, 0.00023906, 0.00193872, -0.00167310, 0.00029097, -0.00029279, -0.00035655, -0.00117220, 0.00153331, 0.00047898, 0.00028300, 0.00119767, -0.00026410, -0.00033305, 0.00059861, -0.00026604, -0.00054201, 0.00071627, 0.00190742, -0.00038157, 0.00106319, 0.00047404, 0.00021900, 0.00063629, -0.00028567, 0.00002773, 0.00019103, 0.00036728, 0.00023411, 0.00021419, 0.00008708, 0.00029920, 0.00052278, 0.00045187, 0.00034723, -0.00073615, 0.00063980, -0.00021954, 0.00036587, 0.00033793, 0.00125899, -0.00019221, 0.00131039, 0.00004861, 0.00005805, 0.00034528, 0.00123912, 0.00031330, -0.00027870, 0.00054811, -0.00005511, -0.00000449, 0.00061049, -0.00013912, 0.00036491, -0.00010525, 0.00070499, 0.00045823, 0.00025861, -0.00046036, 0.00121362, 0.00190910, 0.00087889, -0.00163111, 0.00004689, 0.00079471, -0.00001876, 0.00060458, 0.00023484, -0.00067206, 0.00098559, 0.00017723, 0.00098554, -0.00003597, 0.00019091, 0.00000112, 0.00035871, 0.00017563, 0.00068995, 0.00029707, 0.00013881, 0.00034480, 0.00050187, 0.00003396, 0.00035290],
	type: 'scatter',
	name: 'prediction'
};
var bitcoin_norm = {
	x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116],
	y: [0.01417736, -0.01672775, 0.00810539, -0.01043629, 0.00000000, 0.00216336, -0.00280071, 0.00246333, -0.02544465, 0.00000000, 0.02429749, -0.01357313, 0.00000000, 0.01171655, -0.00343673, 0.00061565, -0.00165374, -0.01271844, 0.01212021, -0.01632993, 0.00268939, 0.01334106, 0.00000000, 0.03801933, -0.02019114, 0.00000000, -0.01072093, 0.01493411, -0.01195523, 0.00522336, 0.00153802, -0.01559556, 0.01640962, -0.00127130, -0.00031321, 0.00035653, 0.00000000, -0.00430766, 0.00000000, -0.00019989, -0.01063348, 0.00786227, -0.00869154, 0.00000000, 0.02283503, 0.01452734, -0.01832033, 0.00734946, -0.01457639, 0.00988925, 0.00410243, -0.00499394, 0.00491143, -0.00032573, -0.00731517, 0.00119120, -0.00482222, 0.00428107, 0.00587677, -0.01232485, 0.01075799, -0.00927394, 0.00591955, -0.00217753, -0.00565234, 0.00898658, -0.00775672, 0.00292492, 0.00488743, -0.00922005, 0.00418748, 0.00746091, 0.00568038, -0.00523657, -0.00659780, 0.00344580, 0.00958682, -0.00298095, 0.00214500, 0.00030338, 0.00225406, -0.00137464, 0.00000000, -0.00222925, 0.00000000, 0.00769314, 0.00464032, 0.00050802, -0.00134699, 0.00000000, 0.01068637, -0.01074505, 0.00705456, -0.00143399, 0.00000000, 0.00457526, -0.00161623, 0.00652177, 0.00000000, -0.01227227, 0.00666085, -0.00692922, 0.00208951, -0.00129045, -0.00135078, 0.00000000, 0.00305316, 0.00000000, 0.00251378, 0.00000000, -0.00379866, 0.00410635, -0.00301738, 0.00271109, 0.00335686, -0.00004031, 0.00000000, 0.00129591, -0.00155963, 0.00244316, 0.00030540, -0.00139397, 0.00000000, 0.00436074, -0.00295344, -0.01309229, -0.00026710, 0.00346417, -0.00528437, 0.00216550, 0.00000000, 0.00398817, 0.00573530, -0.00135392, -0.00615327, 0.00236693, -0.00299524, -0.00157293, -0.00570105, 0.00428285, 0.00000000, -0.00426459, 0.00437391, -0.00476285, 0.00006832, -0.00187951, 0.00288237, -0.00109959, 0.00982214, 0.00000000, 0.00182233, -0.00417983, 0.00093292, -0.00155843, -0.00185946, -0.00154715, 0.00236367, 0.00216939, -0.00214812, 0.00000000, -0.00175571, 0.00263593, 0.00006184, -0.00167715, -0.00030819, 0.00327482, -0.00335903, 0.00072395, -0.00094543, 0.00015117, 0.00016777, -0.00210967, 0.00230797, -0.00026895, -0.00149169, 0.00001968, -0.00385354, -0.00610807, 0.00120160, -0.00021224, 0.00000000, -0.00074988, -0.00073974, 0.00042062, 0.00120782, -0.00045048, 0.00467789, -0.00046227, -0.00038489, 0.00299206, 0.00058874, -0.00119953, -0.00174907, -0.00002586, 0.00151795, 0.00352790, 0.00459300, -0.00105450, -0.00126221, -0.00461130, -0.00353897, 0.00000000, 0.00319988, 0.00519574, -0.00196852, -0.00111024, -0.00143401, -0.00247331, 0.00370168, -0.00148733, -0.00874008, 0.00395868, -0.00363976, 0.00073428, 0.00103030, 0.00065205, -0.00459498, 0.00000000, -0.00410567, 0.00208901, -0.00665798, 0.00254557, -0.00317619, 0.00356700, -0.00216806, 0.00166589, 0.00000000, 0.00237589, 0.00000000, 0.00487442, -0.00109514, -0.00441296, 0.00148315, -0.00058285, 0.00136795, 0.00020437, -0.00457983, 0.00137363, -0.00187729, -0.00218348, 0.00258599, -0.00238791, 0.00427047, -0.00067945, 0.00254387, 0.00203301, 0.00144109, 0.00468025, -0.00427863, 0.00248936, -0.00031479, 0.00016509, 0.00000000, -0.00016048, 0.00301284, 0.00089306, -0.00163226, 0.00131313, -0.00150789, -0.00210661, 0.00045554, 0.00000000, 0.00194355, 0.00089974, -0.00472320, 0.00000000, 0.00029698, 0.00000000, -0.00058461, 0.00000000, -0.00205958, 0.00000000, 0.00338498, 0.00000000, 0.00244989, 0.00158350, 0.00000000, 0.00075242, 0.00154328, -0.00018843, 0.00000000, 0.00047117, 0.00104521, 0.00172249, 0.00216645, -0.00363570, 0.00201490, -0.00034372, -0.00262500, -0.00164171, -0.00039399, 0.00054176, 0.00000000, 0.00212784, 0.00230090, 0.00129469, 0.00000000, -0.00354030, -0.00044468, -0.00534611, 0.00159826, 0.00000000, -0.00169477, 0.00140606, 0.00000000, 0.00000000, 0.00526264, 0.00032151, -0.00100059, -0.00006981, -0.00036879, 0.00269335, 0.00018473, -0.00067216, 0.00177546, 0.00193563, 0.00065352, 0.00172097, 0.00206433, 0.00000000, -0.00109540, -0.00050693, 0.00049214, 0.00045881, 0.00078187, 0.00069261, 0.00013512, 0.00000000, -0.00226227, -0.00143386, 0.00120991, 0.00171410, -0.00225051, 0.00000000, -0.00199509, 0.00049185, -0.00222731, 0.00126048, 0.00138870, -0.00146365, 0.00081215, 0.00179041, -0.00008883, 0.00089293, 0.00025275, -0.00070090, -0.00178658, -0.00208229, -0.00163939, 0.00053576, -0.00127817, 0.00036198, -0.00024830, -0.00138416, -0.00001516, 0.00122838, 0.00070129, 0.00136375, -0.00059403, 0.00094376, 0.00079328, 0.00076245, 0.00110886, 0.00000000, 0.00624044, 0.00406910, -0.00013275, 0.00208550, -0.00078602, 0.00290667, 0.00402279, -0.00253894, 0.00496769, -0.00362063, 0.00155543, 0.00161366, 0.00005316, 0.00205691, 0.00064837, 0.00217653, -0.00182649, 0.00000000, -0.00182100, -0.00075067, 0.00170614, 0.00000000, 0.00137762, 0.00075334, -0.00192897, 0.00201519, 0.00332838, 0.00630939, 0.00206907, 0.00000000, 0.00116971, 0.00000000, 0.00295643, 0.00100717, 0.00118253, 0.00000000, -0.00551434, -0.00145338, -0.00224068, 0.00000000, -0.00405860, 0.00000000, 0.00167981, 0.00210792, -0.00046064, 0.00133151, 0.00119429, -0.00031422, -0.00099243, -0.00228398, -0.00071392, 0.00000000, -0.00241502, -0.00349877, 0.00346402, 0.00135915, -0.00039198, 0.00000000, 0.00268348, -0.00189851, -0.00008041, 0.00168149, -0.00015619, 0.00149352, -0.00003061, 0.00033821, 0.00136987, 0.00032308, -0.00200769, -0.00096213, 0.00000000, -0.00127532, -0.00095698, 0.00048699, 0.00196895, 0.00053832, 0.00022163, 0.00089360, 0.00083309, 0.00058500, 0.00052067, -0.00006541, -0.00033726, -0.00057441, 0.00231498, 0.00000000, 0.00365100, 0.00000000, 0.00384600, 0.00005187, -0.00008068, -0.00267144, 0.00027017, -0.00048387, 0.00109248, -0.00054276, -0.00058782, 0.00091043, 0.00107564, -0.00026393, 0.00046453, -0.00068638, -0.00080951, -0.00033071, 0.00062552, 0.00055005, 0.00077052, 0.00087662, 0.00193177, -0.00087560, 0.00138147, 0.00000000, 0.00191845, 0.00000000, -0.00018646, -0.00182619, 0.00237135, -0.00100652, -0.00460995, -0.00145773, -0.00292983, 0.00261838, -0.00109055, 0.00192465, -0.00037957, 0.00114348, 0.00054080, 0.00150478, 0.00056272, -0.00015822, 0.00071787, 0.00088411, 0.00095371, 0.00060411, 0.00073711, 0.00000000, 0.00443519, -0.00081179, 0.00000000, 0.00420644, 0.00069103, 0.00148625, 0.00198203, 0.00644125, 0.00162357, 0.00543170, -0.00160241, -0.00417406, 0.00041030, 0.00000000, 0.00366453, 0.00105798, 0.00040681, 0.00665021, 0.00285962, -0.00049555, -0.00166464, -0.00235408, -0.00234573, 0.00000000, 0.00029129, -0.00509404, 0.00000000, -0.00264689, 0.00697039, -0.00266204, 0.00107241, -0.00088969, 0.00000000, 0.00611737, 0.00410162, -0.00236208, 0.00170744, 0.00077403, -0.00358353, -0.00031660, -0.00078480, 0.00218803, -0.00035787, -0.00015680, 0.00656563, 0.00023576, -0.00142114, -0.00008006, 0.00000000, 0.00039206, 0.00266053, 0.00131710, 0.00234485, -0.00156049, 0.00258886, -0.00226984, -0.00421227, 0.00035435, 0.00102682, -0.00218648, -0.00368431, -0.00123403, -0.00241564, -0.00046706, -0.00258533, 0.00385250, 0.00267515, 0.00288688, 0.00119204, -0.00167625, 0.00000000, -0.00337056, 0.00081949, 0.00000000, 0.00308270, 0.00046962, -0.00095122, -0.00115388, 0.00018262, -0.00129609, 0.00000000, -0.00016759, -0.00002632, -0.00059706, 0.00048514, -0.00058328, -0.00184789, -0.00165965, -0.00102666, 0.00041220, -0.00184857, 0.00137365, -0.00026600, 0.00000000, 0.00797927, 0.00028055, 0.00031224, -0.00001657, -0.00033840, 0.00312396, 0.00000000, 0.00072450, -0.00008809, -0.00212668, 0.00157255, 0.00000000, 0.00179595, 0.00470454, 0.00035440, 0.00160315, 0.00271771, -0.00280159, 0.00027316, 0.00000000, -0.00432023, -0.00064865, -0.00020995, 0.00020451, 0.00386016, 0.00000137, 0.00000000, -0.00100883, 0.00093459, 0.00032810, 0.00000000, 0.00140900, 0.00058955, -0.00003683, -0.00203775, -0.00217995, 0.00200665, 0.00138202, -0.00170501, -0.00035553, 0.00013132, -0.00066472, -0.00195169, -0.00300045, 0.00310989, 0.00032908, -0.00299231, 0.00005774, -0.00363626, 0.00347568, -0.00115225, 0.00063048, 0.00126567, 0.00480895, -0.00152193, 0.00002465, 0.00183371, 0.00000000, -0.00246598, -0.00076465, -0.00006857, -0.00181583, 0.00150724, -0.00092603, -0.00075113, 0.00000000, 0.00055243, -0.00065101, -0.00132487, -0.00100322, -0.00281846, 0.00075012, -0.00379887, -0.00280737, -0.00080734, 0.00000000, -0.00034489, -0.00161376, 0.00000000, 0.00045147, 0.00324103, -0.00064278, -0.00027228, 0.00142152, -0.00171090, -0.00016263, -0.00129010, 0.00174834, 0.00208573, 0.00145600, 0.00038632, -0.00024914, 0.00000000, 0.00001938, -0.00012183, -0.00018415, -0.00001800, 0.00000000, -0.00048333, 0.00149917, -0.00067652, 0.00110477, 0.00043146, 0.00000000, 0.00417591, 0.00176336, -0.00079012, -0.00198718, -0.00037894, 0.00100628, -0.00136194, -0.00080531, -0.00146150, 0.00000000, 0.00144843, 0.00000000, -0.00189625, 0.00297975, -0.00327695, -0.00062103, 0.00011487, 0.00261823, -0.00186055, 0.00081309, 0.00095198, -0.00076196, 0.00278493, 0.00034302, 0.00100391, 0.00083231, 0.00018282, 0.00188283, -0.00045131, 0.00000000, -0.00034035, -0.00011806, 0.00000000, 0.00052998, 0.00352399, 0.00080816, 0.00056020, -0.00129184, 0.00075614, -0.00138818, -0.00022576, 0.00163128, -0.00015712, 0.00540317, 0.00000000, 0.00402041, 0.00311085, 0.00000000, 0.00283670, -0.00142107, 0.00018193, 0.00351261, -0.00100431, -0.00119483, -0.00192558, 0.00256835, 0.00060918, 0.00092329, -0.00012353, 0.00019203, 0.00128219, 0.00268714, 0.00097088, 0.00069606, -0.00264478, 0.00278297, -0.00410614, 0.00415792, 0.00008276, 0.00025627, 0.00114758, 0.00114227, 0.00012914, 0.00367537, -0.00302794, 0.00504461, 0.00000000, -0.00099009, -0.00608688, 0.00062655, 0.00000000, -0.00290562, 0.00167817, 0.00011071, 0.00000000, 0.00471610, -0.00242530, -0.00190025, -0.00110259, -0.00642396, 0.00786929, -0.00909271, 0.00000000, 0.00239425, 0.00167599, 0.00000000, -0.00089353, 0.00692132, -0.00139020, 0.00053605, 0.00090094, 0.00017710, 0.00000000, 0.00004793, 0.00000000, -0.00239891, -0.00221118, 0.00000000, -0.00012572, 0.00354189, -0.00199261, -0.00113251, 0.00000000, 0.00066049, 0.00051575, -0.00874724, 0.00098483, 0.00292737, -0.00543773, 0.00235997, 0.00172038, -0.00078614, 0.00000000, 0.00093604, 0.00037890, 0.00085020, 0.00069246, -0.00227845, -0.00022716, 0.00000000, 0.00788236, 0.00353886, -0.00298673, -0.00021064, 0.00170017, -0.00188232, -0.00099762, 0.00008144, -0.00143239, 0.00195047, 0.00000000, -0.00391202, 0.00169044, 0.00108182, 0.00032192, -0.00161177, -0.00426934, 0.00415332, 0.00113302, 0.00022581, 0.00000000, -0.00217614, 0.00123838, 0.00000000, -0.00054154, 0.00000000, 0.00340618, -0.00067999, -0.00149833, 0.00198029, 0.00000000, 0.00270451, 0.00016758, 0.00613819, 0.00583641, 0.00589584, 0.00014500, 0.00263831, -0.00047807, -0.00053956, 0.00238237, 0.00067646, 0.00602551, 0.00026490, -0.00084876, -0.00226270, 0.00000000, 0.00158878, 0.00354514, 0.00231683, 0.00048365, 0.00253664, 0.00000000, -0.00497837, 0.00087899, 0.00000000, -0.00395712, -0.00079896, 0.00311690, -0.00127565, 0.00125661, 0.00127181, -0.00144410, -0.00214155, 0.00000000, -0.00188111, 0.00000000, 0.00264758, -0.00055421, 0.00023137, -0.00033341, 0.00276255, -0.00108676, 0.00000000, 0.00184421, -0.00147240, 0.00000000, -0.00076889, 0.00177782, 0.00245385, 0.00000000, 0.00941340, 0.00427817, -0.00134938, 0.00171695, 0.00000000, 0.00000000, 0.01006851, -0.00869546, 0.00534939, -0.01289238, -0.00237178, -0.00790471, 0.01072886, 0.00000000, -0.00473165, -0.00039725, 0.00000000, 0.00065892, 0.00440829, 0.00465297, 0.00113754, -0.00334914, -0.00056494, 0.00000000, -0.00340431, -0.00282064, 0.00575972, -0.00079481, 0.00344694, -0.00230192, 0.00000000, 0.00544084, 0.00701721, -0.00232780, 0.00000000, 0.00172692, 0.00237703, 0.00270406, -0.00777481, -0.00352419, 0.00523597, -0.00112110, 0.00000000, 0.00943788, -0.00140170, -0.00291742, -0.00305519, 0.00225405, -0.00121804, -0.00213857, -0.00665247, 0.00000000, 0.00402202, -0.00942165, 0.00000000, 0.00068484, -0.00747585, 0.01199419, 0.00364405, -0.00220605, -0.00147226, 0.00178023, -0.00395819, 0.00171037, 0.00693645, -0.00281523, 0.00400655, 0.00000000, 0.00121014, 0.00063893, 0.00164532, 0.00000000, 0.00155728, 0.00050367, -0.00543113, 0.00000000, 0.00226515, -0.00115703, -0.00496802, 0.00190486, -0.00105092, 0.00286180, -0.00054781, -0.00043723, -0.00118115, -0.00207861, -0.00330336, 0.00513642, -0.00320775, 0.00041793, -0.00351675, -0.00054246, 0.00000000, -0.00031142, 0.00000000, 0.00609548, -0.00214084, 0.00000000, 0.00192000, -0.00033498, 0.00264657, 0.00000000, 0.00024592, -0.00302349, 0.00152771, 0.00000000, -0.00160367, 0.00066400, -0.00227759, 0.00263496, -0.00325093, -0.00461660, 0.00526456, 0.00000000, -0.00643666, -0.00904241, 0.00486740, -0.00444817, 0.00305329, -0.00768821, -0.00490245, -0.00365405, 0.00043269, -0.00131836, -0.01369926, 0.01046674, -0.00046857, 0.00291096, 0.00443668, 0.01116620, -0.00657688, -0.00088902, 0.00108668, -0.00549610, 0.00387295, 0.00542221, -0.00087262, 0.00477328, 0.00771139, -0.00054915, -0.00999971, 0.00477092, -0.00423948, -0.00150455, 0.00036349, -0.00263372, 0.00348817, 0.00207919, 0.00097127, -0.00020023, 0.00071249, 0.00102243, 0.00204662, 0.00076991, -0.00091245, -0.00065490, 0.00000000, 0.00781661, -0.00083440, 0.00452249, 0.00121094, 0.00111975, -0.00553188, 0.00374102, -0.00617933, 0.00128529, 0.00190767, -0.00012305, -0.00680005, -0.00127991, 0.00335863, -0.00200384, 0.00178434, 0.00205784, -0.00212105, 0.00287148, 0.00000000, 0.00316459, -0.00208237, -0.00094747, 0.00052122, 0.00582191, -0.00537639, -0.01191588, -0.00609406, 0.01188521, 0.00219320, -0.00381056, 0.00157589, -0.00218053, 0.00000000, 0.00684794, -0.00392866, 0.00069099, -0.00458855, 0.00185542, 0.00092279, 0.00222621, 0.00000000, 0.00116869, -0.00231425, 0.00000000, 0.00132842, 0.00000000, -0.00127691, 0.00188652, 0.00000000, 0.00685235],
	type: 'scatter',
	name: 'Bitcoin normalization'
};