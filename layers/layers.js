var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NormativePedestrianWalksheds_1 = new ol.format.GeoJSON();
var features_NormativePedestrianWalksheds_1 = format_NormativePedestrianWalksheds_1.readFeatures(json_NormativePedestrianWalksheds_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormativePedestrianWalksheds_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NormativePedestrianWalksheds_1.addFeatures(features_NormativePedestrianWalksheds_1);
var lyr_NormativePedestrianWalksheds_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NormativePedestrianWalksheds_1, 
                style: style_NormativePedestrianWalksheds_1,
                popuplayertitle: 'Normative Pedestrian Walksheds',
                interactive: false,
                title: '<img src="styles/legend/NormativePedestrianWalksheds_1.png" /> Normative Pedestrian Walksheds'
            });
var format_TypicalPedestrianWalksheds_2 = new ol.format.GeoJSON();
var features_TypicalPedestrianWalksheds_2 = format_TypicalPedestrianWalksheds_2.readFeatures(json_TypicalPedestrianWalksheds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TypicalPedestrianWalksheds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TypicalPedestrianWalksheds_2.addFeatures(features_TypicalPedestrianWalksheds_2);
var lyr_TypicalPedestrianWalksheds_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TypicalPedestrianWalksheds_2, 
                style: style_TypicalPedestrianWalksheds_2,
                popuplayertitle: 'Typical Pedestrian Walksheds',
                interactive: false,
                title: '<img src="styles/legend/TypicalPedestrianWalksheds_2.png" /> Typical Pedestrian Walksheds'
            });
var format_RollingandManualWheelchairWalksheds_3 = new ol.format.GeoJSON();
var features_RollingandManualWheelchairWalksheds_3 = format_RollingandManualWheelchairWalksheds_3.readFeatures(json_RollingandManualWheelchairWalksheds_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RollingandManualWheelchairWalksheds_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RollingandManualWheelchairWalksheds_3.addFeatures(features_RollingandManualWheelchairWalksheds_3);
var lyr_RollingandManualWheelchairWalksheds_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RollingandManualWheelchairWalksheds_3, 
                style: style_RollingandManualWheelchairWalksheds_3,
                popuplayertitle: 'Rolling and Manual Wheelchair Walksheds',
                interactive: false,
                title: '<img src="styles/legend/RollingandManualWheelchairWalksheds_3.png" /> Rolling and Manual Wheelchair Walksheds'
            });
var format_CarCrashesinSeattle_4 = new ol.format.GeoJSON();
var features_CarCrashesinSeattle_4 = format_CarCrashesinSeattle_4.readFeatures(json_CarCrashesinSeattle_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarCrashesinSeattle_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarCrashesinSeattle_4.addFeatures(features_CarCrashesinSeattle_4);
var lyr_CarCrashesinSeattle_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarCrashesinSeattle_4, 
                style: style_CarCrashesinSeattle_4,
                popuplayertitle: 'Car Crashes in Seattle',
                interactive: true,
                title: '<img src="styles/legend/CarCrashesinSeattle_4.png" /> Car Crashes in Seattle'
            });
var format_AllPOIs_5 = new ol.format.GeoJSON();
var features_AllPOIs_5 = format_AllPOIs_5.readFeatures(json_AllPOIs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPOIs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPOIs_5.addFeatures(features_AllPOIs_5);
var lyr_AllPOIs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllPOIs_5, 
                style: style_AllPOIs_5,
                popuplayertitle: 'All POIs',
                interactive: false,
                title: '<img src="styles/legend/AllPOIs_5.png" /> All POIs'
            });
var format_POIsAccessiblebyNormativePedestrianWalksheds_6 = new ol.format.GeoJSON();
var features_POIsAccessiblebyNormativePedestrianWalksheds_6 = format_POIsAccessiblebyNormativePedestrianWalksheds_6.readFeatures(json_POIsAccessiblebyNormativePedestrianWalksheds_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIsAccessiblebyNormativePedestrianWalksheds_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIsAccessiblebyNormativePedestrianWalksheds_6.addFeatures(features_POIsAccessiblebyNormativePedestrianWalksheds_6);
var lyr_POIsAccessiblebyNormativePedestrianWalksheds_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIsAccessiblebyNormativePedestrianWalksheds_6, 
                style: style_POIsAccessiblebyNormativePedestrianWalksheds_6,
                popuplayertitle: 'POIs Accessible by Normative Pedestrian Walksheds',
                interactive: true,
                title: '<img src="styles/legend/POIsAccessiblebyNormativePedestrianWalksheds_6.png" /> POIs Accessible by Normative Pedestrian Walksheds'
            });
var format_POIsAccessiblebyTypicalPedestrianWalksheds_7 = new ol.format.GeoJSON();
var features_POIsAccessiblebyTypicalPedestrianWalksheds_7 = format_POIsAccessiblebyTypicalPedestrianWalksheds_7.readFeatures(json_POIsAccessiblebyTypicalPedestrianWalksheds_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIsAccessiblebyTypicalPedestrianWalksheds_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIsAccessiblebyTypicalPedestrianWalksheds_7.addFeatures(features_POIsAccessiblebyTypicalPedestrianWalksheds_7);
var lyr_POIsAccessiblebyTypicalPedestrianWalksheds_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIsAccessiblebyTypicalPedestrianWalksheds_7, 
                style: style_POIsAccessiblebyTypicalPedestrianWalksheds_7,
                popuplayertitle: 'POIs Accessible by Typical Pedestrian Walksheds',
                interactive: true,
                title: '<img src="styles/legend/POIsAccessiblebyTypicalPedestrianWalksheds_7.png" /> POIs Accessible by Typical Pedestrian Walksheds'
            });
var format_POIsAccessiblebyRollingandManualWheelchairWalksheds_8 = new ol.format.GeoJSON();
var features_POIsAccessiblebyRollingandManualWheelchairWalksheds_8 = format_POIsAccessiblebyRollingandManualWheelchairWalksheds_8.readFeatures(json_POIsAccessiblebyRollingandManualWheelchairWalksheds_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIsAccessiblebyRollingandManualWheelchairWalksheds_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIsAccessiblebyRollingandManualWheelchairWalksheds_8.addFeatures(features_POIsAccessiblebyRollingandManualWheelchairWalksheds_8);
var lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIsAccessiblebyRollingandManualWheelchairWalksheds_8, 
                style: style_POIsAccessiblebyRollingandManualWheelchairWalksheds_8,
                popuplayertitle: 'POIs Accessible by Rolling and Manual Wheelchair Walksheds',
                interactive: true,
                title: '<img src="styles/legend/POIsAccessiblebyRollingandManualWheelchairWalksheds_8.png" /> POIs Accessible by Rolling and Manual Wheelchair Walksheds'
            });
var format_SeattlePublicSchools_9 = new ol.format.GeoJSON();
var features_SeattlePublicSchools_9 = format_SeattlePublicSchools_9.readFeatures(json_SeattlePublicSchools_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeattlePublicSchools_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeattlePublicSchools_9.addFeatures(features_SeattlePublicSchools_9);
var lyr_SeattlePublicSchools_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeattlePublicSchools_9, 
                style: style_SeattlePublicSchools_9,
                popuplayertitle: 'Seattle Public Schools',
                interactive: true,
                title: '<img src="styles/legend/SeattlePublicSchools_9.png" /> Seattle Public Schools'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NormativePedestrianWalksheds_1.setVisible(true);lyr_TypicalPedestrianWalksheds_2.setVisible(true);lyr_RollingandManualWheelchairWalksheds_3.setVisible(true);lyr_CarCrashesinSeattle_4.setVisible(false);lyr_AllPOIs_5.setVisible(true);lyr_POIsAccessiblebyNormativePedestrianWalksheds_6.setVisible(true);lyr_POIsAccessiblebyTypicalPedestrianWalksheds_7.setVisible(true);lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_8.setVisible(true);lyr_SeattlePublicSchools_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NormativePedestrianWalksheds_1,lyr_TypicalPedestrianWalksheds_2,lyr_RollingandManualWheelchairWalksheds_3,lyr_CarCrashesinSeattle_4,lyr_AllPOIs_5,lyr_POIsAccessiblebyNormativePedestrianWalksheds_6,lyr_POIsAccessiblebyTypicalPedestrianWalksheds_7,lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_8,lyr_SeattlePublicSchools_9];
lyr_NormativePedestrianWalksheds_1.set('fieldAliases', {'_id': '_id', '_layer': '_layer', '_u': '_u', '_u_id': '_u_id', '_v': '_v', '_v_id': '_v_id', 'climb': 'climb', 'crossing_markings': 'crossing_markings', 'curbramps': 'curbramps', 'curbs': 'curbs', 'description': 'description', 'ext_at_intersection': 'ext_at_intersection', 'ext_corner_id': 'ext_corner_id', 'ext_covered': 'ext_covered', 'ext_fixme': 'ext_fixme', 'ext_from_intersection': 'ext_from_intersection', 'ext_line_description': 'ext_line_description', 'ext_line_type': 'ext_line_type', 'ext_lit': 'ext_lit', 'ext_material': 'ext_material', 'ext_node_description': 'ext_node_description', 'ext_note': 'ext_note', 'ext_osm_version': 'ext_osm_version', 'ext_ramp': 'ext_ramp', 'ext_side': 'ext_side', 'ext_sidewalk_corrected': 'ext_sidewalk_corrected', 'ext_sw_id': 'ext_sw_id', 'ext_to_intersection': 'ext_to_intersection', 'ext_website': 'ext_website', 'ext_width_confidence': 'ext_width_confidence', 'fid': 'fid', 'foot': 'foot', 'footway': 'footway', 'highway': 'highway', 'incline': 'incline', 'length': 'length', 'name': 'name', 'step_count': 'step_count', 'surface': 'surface', 'width': 'width', });
lyr_TypicalPedestrianWalksheds_2.set('fieldAliases', {'_id': '_id', '_layer': '_layer', '_u': '_u', '_u_id': '_u_id', '_v': '_v', '_v_id': '_v_id', 'climb': 'climb', 'crossing_markings': 'crossing_markings', 'curbramps': 'curbramps', 'curbs': 'curbs', 'description': 'description', 'ext_at_intersection': 'ext_at_intersection', 'ext_corner_id': 'ext_corner_id', 'ext_covered': 'ext_covered', 'ext_fixme': 'ext_fixme', 'ext_from_intersection': 'ext_from_intersection', 'ext_line_description': 'ext_line_description', 'ext_line_type': 'ext_line_type', 'ext_lit': 'ext_lit', 'ext_material': 'ext_material', 'ext_node_description': 'ext_node_description', 'ext_note': 'ext_note', 'ext_osm_version': 'ext_osm_version', 'ext_ramp': 'ext_ramp', 'ext_side': 'ext_side', 'ext_sidewalk_corrected': 'ext_sidewalk_corrected', 'ext_sw_id': 'ext_sw_id', 'ext_to_intersection': 'ext_to_intersection', 'ext_website': 'ext_website', 'ext_width_confidence': 'ext_width_confidence', 'fid': 'fid', 'foot': 'foot', 'footway': 'footway', 'highway': 'highway', 'incline': 'incline', 'length': 'length', 'name': 'name', 'step_count': 'step_count', 'surface': 'surface', 'width': 'width', });
lyr_RollingandManualWheelchairWalksheds_3.set('fieldAliases', {'_id': '_id', '_layer': '_layer', '_u': '_u', '_u_id': '_u_id', '_v': '_v', '_v_id': '_v_id', 'climb': 'climb', 'crossing_markings': 'crossing_markings', 'curbramps': 'curbramps', 'curbs': 'curbs', 'description': 'description', 'ext_at_intersection': 'ext_at_intersection', 'ext_corner_id': 'ext_corner_id', 'ext_covered': 'ext_covered', 'ext_fixme': 'ext_fixme', 'ext_from_intersection': 'ext_from_intersection', 'ext_line_description': 'ext_line_description', 'ext_line_type': 'ext_line_type', 'ext_lit': 'ext_lit', 'ext_material': 'ext_material', 'ext_node_description': 'ext_node_description', 'ext_note': 'ext_note', 'ext_osm_version': 'ext_osm_version', 'ext_ramp': 'ext_ramp', 'ext_side': 'ext_side', 'ext_sidewalk_corrected': 'ext_sidewalk_corrected', 'ext_sw_id': 'ext_sw_id', 'ext_to_intersection': 'ext_to_intersection', 'ext_website': 'ext_website', 'ext_width_confidence': 'ext_width_confidence', 'fid': 'fid', 'foot': 'foot', 'footway': 'footway', 'highway': 'highway', 'incline': 'incline', 'length': 'length', 'name': 'name', 'step_count': 'step_count', 'surface': 'surface', 'width': 'width', });
lyr_CarCrashesinSeattle_4.set('fieldAliases', {});
lyr_AllPOIs_5.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'overture_confidence': 'overture_confidence', 'node_id': 'node_id', });
lyr_POIsAccessiblebyNormativePedestrianWalksheds_6.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'node_id': 'node_id', 'overture_confidence': 'overture_confidence', });
lyr_POIsAccessiblebyTypicalPedestrianWalksheds_7.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'node_id': 'node_id', 'overture_confidence': 'overture_confidence', });
lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_8.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'node_id': 'node_id', 'overture_confidence': 'overture_confidence', });
lyr_SeattlePublicSchools_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'school_ID': 'school_ID', 'school_name': 'school_name', 'mapLabel': 'mapLabel', 'status': 'status', 'grades': 'grades', 'esmshs': 'esmshs', 'siteID': 'siteID', 'address': 'address', 'zip': 'zip', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_NormativePedestrianWalksheds_1.set('fieldImages', {'_id': 'TextEdit', '_layer': 'TextEdit', '_u': 'TextEdit', '_u_id': 'TextEdit', '_v': 'TextEdit', '_v_id': 'TextEdit', 'climb': 'TextEdit', 'crossing_markings': 'TextEdit', 'curbramps': 'TextEdit', 'curbs': 'TextEdit', 'description': 'TextEdit', 'ext_at_intersection': 'TextEdit', 'ext_corner_id': 'TextEdit', 'ext_covered': 'TextEdit', 'ext_fixme': 'TextEdit', 'ext_from_intersection': 'TextEdit', 'ext_line_description': 'TextEdit', 'ext_line_type': 'TextEdit', 'ext_lit': 'TextEdit', 'ext_material': 'TextEdit', 'ext_node_description': 'TextEdit', 'ext_note': 'TextEdit', 'ext_osm_version': 'Range', 'ext_ramp': 'TextEdit', 'ext_side': 'TextEdit', 'ext_sidewalk_corrected': 'TextEdit', 'ext_sw_id': 'TextEdit', 'ext_to_intersection': 'TextEdit', 'ext_website': 'TextEdit', 'ext_width_confidence': 'TextEdit', 'fid': 'Range', 'foot': 'TextEdit', 'footway': 'TextEdit', 'highway': 'TextEdit', 'incline': 'TextEdit', 'length': 'TextEdit', 'name': 'TextEdit', 'step_count': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', });
lyr_TypicalPedestrianWalksheds_2.set('fieldImages', {'_id': 'TextEdit', '_layer': 'TextEdit', '_u': 'TextEdit', '_u_id': 'TextEdit', '_v': 'TextEdit', '_v_id': 'TextEdit', 'climb': 'TextEdit', 'crossing_markings': 'TextEdit', 'curbramps': 'TextEdit', 'curbs': 'TextEdit', 'description': 'TextEdit', 'ext_at_intersection': 'TextEdit', 'ext_corner_id': 'TextEdit', 'ext_covered': 'TextEdit', 'ext_fixme': 'TextEdit', 'ext_from_intersection': 'TextEdit', 'ext_line_description': 'TextEdit', 'ext_line_type': 'TextEdit', 'ext_lit': 'TextEdit', 'ext_material': 'TextEdit', 'ext_node_description': 'TextEdit', 'ext_note': 'TextEdit', 'ext_osm_version': 'Range', 'ext_ramp': 'TextEdit', 'ext_side': 'TextEdit', 'ext_sidewalk_corrected': 'TextEdit', 'ext_sw_id': 'TextEdit', 'ext_to_intersection': 'TextEdit', 'ext_website': 'TextEdit', 'ext_width_confidence': 'TextEdit', 'fid': 'Range', 'foot': 'TextEdit', 'footway': 'TextEdit', 'highway': 'TextEdit', 'incline': 'TextEdit', 'length': 'TextEdit', 'name': 'TextEdit', 'step_count': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', });
lyr_RollingandManualWheelchairWalksheds_3.set('fieldImages', {'_id': 'TextEdit', '_layer': 'TextEdit', '_u': 'TextEdit', '_u_id': 'TextEdit', '_v': 'TextEdit', '_v_id': 'TextEdit', 'climb': 'TextEdit', 'crossing_markings': 'TextEdit', 'curbramps': 'TextEdit', 'curbs': 'TextEdit', 'description': 'TextEdit', 'ext_at_intersection': 'TextEdit', 'ext_corner_id': 'TextEdit', 'ext_covered': 'TextEdit', 'ext_fixme': 'TextEdit', 'ext_from_intersection': 'TextEdit', 'ext_line_description': 'TextEdit', 'ext_line_type': 'TextEdit', 'ext_lit': 'TextEdit', 'ext_material': 'TextEdit', 'ext_node_description': 'TextEdit', 'ext_note': 'TextEdit', 'ext_osm_version': 'Range', 'ext_ramp': 'TextEdit', 'ext_side': 'TextEdit', 'ext_sidewalk_corrected': 'TextEdit', 'ext_sw_id': 'TextEdit', 'ext_to_intersection': 'TextEdit', 'ext_website': 'TextEdit', 'ext_width_confidence': 'TextEdit', 'fid': 'Range', 'foot': 'TextEdit', 'footway': 'TextEdit', 'highway': 'TextEdit', 'incline': 'TextEdit', 'length': 'TextEdit', 'name': 'TextEdit', 'step_count': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', });
lyr_CarCrashesinSeattle_4.set('fieldImages', {});
lyr_AllPOIs_5.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'Hidden', 'osm_value': 'Hidden', 'source': 'Hidden', 'confidence': 'Hidden', 'overture_confidence': 'Hidden', 'node_id': 'Hidden', });
lyr_POIsAccessiblebyNormativePedestrianWalksheds_6.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'TextEdit', 'osm_value': 'TextEdit', 'source': 'TextEdit', 'confidence': 'TextEdit', 'node_id': 'TextEdit', 'overture_confidence': 'TextEdit', });
lyr_POIsAccessiblebyTypicalPedestrianWalksheds_7.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'TextEdit', 'osm_value': 'TextEdit', 'source': 'TextEdit', 'confidence': 'TextEdit', 'node_id': 'TextEdit', 'overture_confidence': 'TextEdit', });
lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_8.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'TextEdit', 'osm_value': 'TextEdit', 'source': 'TextEdit', 'confidence': 'TextEdit', 'node_id': 'TextEdit', 'overture_confidence': 'TextEdit', });
lyr_SeattlePublicSchools_9.set('fieldImages', {'OBJECTID': 'Hidden', 'school_ID': 'Hidden', 'school_name': 'TextEdit', 'mapLabel': 'Hidden', 'status': 'TextEdit', 'grades': 'TextEdit', 'esmshs': 'Hidden', 'siteID': 'Hidden', 'address': 'TextEdit', 'zip': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_NormativePedestrianWalksheds_1.set('fieldLabels', {'_id': 'no label', '_layer': 'no label', '_u': 'no label', '_u_id': 'no label', '_v': 'no label', '_v_id': 'no label', 'climb': 'no label', 'crossing_markings': 'no label', 'curbramps': 'no label', 'curbs': 'no label', 'description': 'no label', 'ext_at_intersection': 'no label', 'ext_corner_id': 'no label', 'ext_covered': 'no label', 'ext_fixme': 'no label', 'ext_from_intersection': 'no label', 'ext_line_description': 'no label', 'ext_line_type': 'no label', 'ext_lit': 'no label', 'ext_material': 'no label', 'ext_node_description': 'no label', 'ext_note': 'no label', 'ext_osm_version': 'no label', 'ext_ramp': 'no label', 'ext_side': 'no label', 'ext_sidewalk_corrected': 'no label', 'ext_sw_id': 'no label', 'ext_to_intersection': 'no label', 'ext_website': 'no label', 'ext_width_confidence': 'no label', 'fid': 'no label', 'foot': 'no label', 'footway': 'no label', 'highway': 'no label', 'incline': 'no label', 'length': 'no label', 'name': 'no label', 'step_count': 'no label', 'surface': 'no label', 'width': 'no label', });
lyr_TypicalPedestrianWalksheds_2.set('fieldLabels', {'_id': 'no label', '_layer': 'no label', '_u': 'no label', '_u_id': 'no label', '_v': 'no label', '_v_id': 'no label', 'climb': 'no label', 'crossing_markings': 'no label', 'curbramps': 'no label', 'curbs': 'no label', 'description': 'no label', 'ext_at_intersection': 'no label', 'ext_corner_id': 'no label', 'ext_covered': 'no label', 'ext_fixme': 'no label', 'ext_from_intersection': 'no label', 'ext_line_description': 'no label', 'ext_line_type': 'no label', 'ext_lit': 'no label', 'ext_material': 'no label', 'ext_node_description': 'no label', 'ext_note': 'no label', 'ext_osm_version': 'no label', 'ext_ramp': 'no label', 'ext_side': 'no label', 'ext_sidewalk_corrected': 'no label', 'ext_sw_id': 'no label', 'ext_to_intersection': 'no label', 'ext_website': 'no label', 'ext_width_confidence': 'no label', 'fid': 'no label', 'foot': 'no label', 'footway': 'no label', 'highway': 'no label', 'incline': 'no label', 'length': 'no label', 'name': 'no label', 'step_count': 'no label', 'surface': 'no label', 'width': 'no label', });
lyr_RollingandManualWheelchairWalksheds_3.set('fieldLabels', {'_id': 'no label', '_layer': 'no label', '_u': 'no label', '_u_id': 'no label', '_v': 'no label', '_v_id': 'no label', 'climb': 'no label', 'crossing_markings': 'no label', 'curbramps': 'no label', 'curbs': 'no label', 'description': 'no label', 'ext_at_intersection': 'no label', 'ext_corner_id': 'no label', 'ext_covered': 'no label', 'ext_fixme': 'no label', 'ext_from_intersection': 'no label', 'ext_line_description': 'no label', 'ext_line_type': 'no label', 'ext_lit': 'no label', 'ext_material': 'no label', 'ext_node_description': 'no label', 'ext_note': 'no label', 'ext_osm_version': 'no label', 'ext_ramp': 'no label', 'ext_side': 'no label', 'ext_sidewalk_corrected': 'no label', 'ext_sw_id': 'no label', 'ext_to_intersection': 'no label', 'ext_website': 'no label', 'ext_width_confidence': 'no label', 'fid': 'no label', 'foot': 'no label', 'footway': 'no label', 'highway': 'no label', 'incline': 'no label', 'length': 'no label', 'name': 'no label', 'step_count': 'no label', 'surface': 'no label', 'width': 'no label', });
lyr_CarCrashesinSeattle_4.set('fieldLabels', {});
lyr_AllPOIs_5.set('fieldLabels', {'name': 'inline label - visible with data', 'category': 'no label', });
lyr_POIsAccessiblebyNormativePedestrianWalksheds_6.set('fieldLabels', {'name': 'no label', 'category': 'no label', 'osm_key': 'no label', 'osm_value': 'no label', 'source': 'no label', 'confidence': 'no label', 'node_id': 'no label', 'overture_confidence': 'no label', });
lyr_POIsAccessiblebyTypicalPedestrianWalksheds_7.set('fieldLabels', {'name': 'no label', 'category': 'no label', 'osm_key': 'no label', 'osm_value': 'no label', 'source': 'no label', 'confidence': 'no label', 'node_id': 'no label', 'overture_confidence': 'no label', });
lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_8.set('fieldLabels', {'name': 'no label', 'category': 'no label', 'osm_key': 'no label', 'osm_value': 'no label', 'source': 'no label', 'confidence': 'no label', 'node_id': 'no label', 'overture_confidence': 'no label', });
lyr_SeattlePublicSchools_9.set('fieldLabels', {'school_name': 'inline label - visible with data', 'status': 'no label', 'grades': 'no label', 'address': 'no label', });
lyr_SeattlePublicSchools_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});