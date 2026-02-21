var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_AREAFUNGSIONAL_6 = new ol.format.GeoJSON();
var features_AREAFUNGSIONAL_6 = format_AREAFUNGSIONAL_6.readFeatures(json_AREAFUNGSIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAFUNGSIONAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAFUNGSIONAL_6.addFeatures(features_AREAFUNGSIONAL_6);
var lyr_AREAFUNGSIONAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAFUNGSIONAL_6, 
                style: style_AREAFUNGSIONAL_6,
                popuplayertitle: 'AREA FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/AREAFUNGSIONAL_6.png" /> AREA FUNGSIONAL'
            });
var format_KETERANGANKERUSAKANSALURAN_7 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_7 = format_KETERANGANKERUSAKANSALURAN_7.readFeatures(json_KETERANGANKERUSAKANSALURAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_7.addFeatures(features_KETERANGANKERUSAKANSALURAN_7);
var lyr_KETERANGANKERUSAKANSALURAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_7, 
                style: style_KETERANGANKERUSAKANSALURAN_7,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_3.png" /> Rusak Berat<br />' });
var format_JENISSALURAN_8 = new ol.format.GeoJSON();
var features_JENISSALURAN_8 = format_JENISSALURAN_8.readFeatures(json_JENISSALURAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISSALURAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISSALURAN_8.addFeatures(features_JENISSALURAN_8);
var lyr_JENISSALURAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENISSALURAN_8, 
                style: style_JENISSALURAN_8,
                popuplayertitle: 'JENIS SALURAN',
                interactive: true,
    title: 'JENIS SALURAN<br />\
    <img src="styles/legend/JENISSALURAN_8_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENISSALURAN_8_1.png" /> Saluran Sekunder<br />' });
var format_AREANOMENKLATUR_9 = new ol.format.GeoJSON();
var features_AREANOMENKLATUR_9 = format_AREANOMENKLATUR_9.readFeatures(json_AREANOMENKLATUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREANOMENKLATUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREANOMENKLATUR_9.addFeatures(features_AREANOMENKLATUR_9);
var lyr_AREANOMENKLATUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREANOMENKLATUR_9, 
                style: style_AREANOMENKLATUR_9,
                popuplayertitle: 'AREA NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREANOMENKLATUR_9.png" /> AREA NOMENKLATUR'
            });
var format_BANGUNANNOMENKLATUR_10 = new ol.format.GeoJSON();
var features_BANGUNANNOMENKLATUR_10 = format_BANGUNANNOMENKLATUR_10.readFeatures(json_BANGUNANNOMENKLATUR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANNOMENKLATUR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANNOMENKLATUR_10.addFeatures(features_BANGUNANNOMENKLATUR_10);
var lyr_BANGUNANNOMENKLATUR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNANNOMENKLATUR_10, 
                style: style_BANGUNANNOMENKLATUR_10,
                popuplayertitle: 'BANGUNAN NOMENKLATUR',
                interactive: false,
                title: '<img src="styles/legend/BANGUNANNOMENKLATUR_10.png" /> BANGUNAN NOMENKLATUR'
            });
var format_Tikungan_11 = new ol.format.GeoJSON();
var features_Tikungan_11 = format_Tikungan_11.readFeatures(json_Tikungan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_11.addFeatures(features_Tikungan_11);
var lyr_Tikungan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_11, 
                style: style_Tikungan_11,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_11.png" /> Tikungan'
            });
var format_Beda_Pasangan_12 = new ol.format.GeoJSON();
var features_Beda_Pasangan_12 = format_Beda_Pasangan_12.readFeatures(json_Beda_Pasangan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_Pasangan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_Pasangan_12.addFeatures(features_Beda_Pasangan_12);
var lyr_Beda_Pasangan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_Pasangan_12, 
                style: style_Beda_Pasangan_12,
                popuplayertitle: 'Beda_Pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_Pasangan_12.png" /> Beda_Pasangan'
            });
var format_Gorong__Gorong_13 = new ol.format.GeoJSON();
var features_Gorong__Gorong_13 = format_Gorong__Gorong_13.readFeatures(json_Gorong__Gorong_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_13.addFeatures(features_Gorong__Gorong_13);
var lyr_Gorong__Gorong_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_13, 
                style: style_Gorong__Gorong_13,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_13.png" /> Gorong_-_Gorong'
            });
var format_Titik_Per_50_14 = new ol.format.GeoJSON();
var features_Titik_Per_50_14 = format_Titik_Per_50_14.readFeatures(json_Titik_Per_50_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_14.addFeatures(features_Titik_Per_50_14);
var lyr_Titik_Per_50_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_14, 
                style: style_Titik_Per_50_14,
                popuplayertitle: 'Titik_Per_50',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_14.png" /> Titik_Per_50'
            });
var format_Box_Get_Valve_15 = new ol.format.GeoJSON();
var features_Box_Get_Valve_15 = format_Box_Get_Valve_15.readFeatures(json_Box_Get_Valve_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Get_Valve_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Get_Valve_15.addFeatures(features_Box_Get_Valve_15);
var lyr_Box_Get_Valve_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Get_Valve_15, 
                style: style_Box_Get_Valve_15,
                popuplayertitle: 'Box_Get_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Get_Valve_15.png" /> Box_Get_Valve'
            });
var format_Box_Alva_Valev_16 = new ol.format.GeoJSON();
var features_Box_Alva_Valev_16 = format_Box_Alva_Valev_16.readFeatures(json_Box_Alva_Valev_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Alva_Valev_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Alva_Valev_16.addFeatures(features_Box_Alva_Valev_16);
var lyr_Box_Alva_Valev_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Alva_Valev_16, 
                style: style_Box_Alva_Valev_16,
                popuplayertitle: 'Box_Alva_Valev',
                interactive: true,
                title: '<img src="styles/legend/Box_Alva_Valev_16.png" /> Box_Alva_Valev'
            });
var format_BangunanAir_17 = new ol.format.GeoJSON();
var features_BangunanAir_17 = format_BangunanAir_17.readFeatures(json_BangunanAir_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanAir_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanAir_17.addFeatures(features_BangunanAir_17);
var lyr_BangunanAir_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanAir_17, 
                style: style_BangunanAir_17,
                popuplayertitle: 'Bangunan Air',
                interactive: true,
                title: '<img src="styles/legend/BangunanAir_17.png" /> Bangunan Air'
            });
var format_Bangunan_Bagi_18 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_18 = format_Bangunan_Bagi_18.readFeatures(json_Bangunan_Bagi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_18.addFeatures(features_Bangunan_Bagi_18);
var lyr_Bangunan_Bagi_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_18, 
                style: style_Bangunan_Bagi_18,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_18.png" /> Bangunan_Bagi'
            });
var format_Rumah_Pompa_19 = new ol.format.GeoJSON();
var features_Rumah_Pompa_19 = format_Rumah_Pompa_19.readFeatures(json_Rumah_Pompa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_19.addFeatures(features_Rumah_Pompa_19);
var lyr_Rumah_Pompa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_19, 
                style: style_Rumah_Pompa_19,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_19.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESORIS = new ol.layer.Group({
                                layers: [lyr_Box_Get_Valve_15,lyr_Box_Alva_Valev_16,lyr_BangunanAir_17,lyr_Bangunan_Bagi_18,lyr_Rumah_Pompa_19,],
                                fold: 'open',
                                title: 'TITIK AKSESORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_11,lyr_Beda_Pasangan_12,lyr_Gorong__Gorong_13,lyr_Titik_Per_50_14,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREANOMENKLATUR_9,lyr_BANGUNANNOMENKLATUR_10,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(false);lyr_OpenTopoMap_3.setVisible(false);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_AREAFUNGSIONAL_6.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_7.setVisible(true);lyr_JENISSALURAN_8.setVisible(true);lyr_AREANOMENKLATUR_9.setVisible(true);lyr_BANGUNANNOMENKLATUR_10.setVisible(true);lyr_Tikungan_11.setVisible(true);lyr_Beda_Pasangan_12.setVisible(true);lyr_Gorong__Gorong_13.setVisible(true);lyr_Titik_Per_50_14.setVisible(true);lyr_Box_Get_Valve_15.setVisible(true);lyr_Box_Alva_Valev_16.setVisible(true);lyr_BangunanAir_17.setVisible(true);lyr_Bangunan_Bagi_18.setVisible(true);lyr_Rumah_Pompa_19.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_OpenTopoMap_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_AREAFUNGSIONAL_6,lyr_KETERANGANKERUSAKANSALURAN_7,lyr_JENISSALURAN_8,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSESORIS];
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AREAFUNGSIONAL_6.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldAliases', {'Id': 'Id', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENISSALURAN_8.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'PANJANG': 'PANJANG', });
lyr_AREANOMENKLATUR_9.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', 'PEMBAGIAN': 'PEMBAGIAN', 'AREA': 'AREA', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', 'PEMBAGIAN': 'PEMBAGIAN', 'URUTAN': 'URUTAN', });
lyr_Tikungan_11.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Beda_Pasangan_12.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Gorong__Gorong_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Titik_Per_50_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Box_Get_Valve_15.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Box_Alva_Valev_16.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_BangunanAir_17.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Bangunan_Bagi_18.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_Rumah_Pompa_19.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Panjang': 'Panjang', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', 'Foto_7': 'Foto_7', 'Foto_8': 'Foto_8', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AREAFUNGSIONAL_6.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldImages', {'Id': 'Range', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENISSALURAN_8.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_AREANOMENKLATUR_9.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'TextEdit', 'Foto_2': 'TextEdit', 'Foto_3': 'TextEdit', 'Foto_4': 'TextEdit', 'Foto_5': 'TextEdit', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'URUTAN': 'TextEdit', });
lyr_Tikungan_11.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_Beda_Pasangan_12.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'TextEdit', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_Gorong__Gorong_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_Titik_Per_50_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_Box_Get_Valve_15.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_Box_Alva_Valev_16.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_BangunanAir_17.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'TextEdit', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_Bangunan_Bagi_18.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_Rumah_Pompa_19.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Panjang': 'TextEdit', 'Foto_1': 'ExternalResource', 'Foto_2': 'ExternalResource', 'Foto_3': 'ExternalResource', 'Foto_4': 'ExternalResource', 'Foto_5': 'ExternalResource', 'Foto_6': 'TextEdit', 'Foto_7': 'TextEdit', 'Foto_8': 'TextEdit', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AREAFUNGSIONAL_6.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldLabels', {'Id': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENISSALURAN_8.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_AREANOMENKLATUR_9.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'Bujur': 'no label', 'Lintang': 'no label', 'Panjang': 'no label', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', 'PEMBAGIAN': 'no label', 'URUTAN': 'no label', });
lyr_Tikungan_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Beda_Pasangan_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Gorong__Gorong_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Titik_Per_50_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Box_Get_Valve_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Box_Alva_Valev_16.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_BangunanAir_17.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Bangunan_Bagi_18.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Rumah_Pompa_19.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Bujur': 'inline label - visible with data', 'Lintang': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Foto_1': 'no label', 'Foto_2': 'no label', 'Foto_3': 'no label', 'Foto_4': 'no label', 'Foto_5': 'no label', 'Foto_6': 'no label', 'Foto_7': 'no label', 'Foto_8': 'no label', });
lyr_Rumah_Pompa_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});