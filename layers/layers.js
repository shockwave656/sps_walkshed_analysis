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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/RollingandManualWheelchairWalksheds_3.png" /> Rolling and Manual Wheelchair Walksheds'
            });
var format_AllPOIs_4 = new ol.format.GeoJSON();
var features_AllPOIs_4 = format_AllPOIs_4.readFeatures(json_AllPOIs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPOIs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPOIs_4.addFeatures(features_AllPOIs_4);
var lyr_AllPOIs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllPOIs_4, 
                style: style_AllPOIs_4,
                popuplayertitle: 'All POIs',
                interactive: true,
                title: '<img src="styles/legend/AllPOIs_4.png" /> All POIs'
            });
var format_POIsAccessiblebyNormativePedestrianWalksheds_5 = new ol.format.GeoJSON();
var features_POIsAccessiblebyNormativePedestrianWalksheds_5 = format_POIsAccessiblebyNormativePedestrianWalksheds_5.readFeatures(json_POIsAccessiblebyNormativePedestrianWalksheds_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIsAccessiblebyNormativePedestrianWalksheds_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIsAccessiblebyNormativePedestrianWalksheds_5.addFeatures(features_POIsAccessiblebyNormativePedestrianWalksheds_5);
var lyr_POIsAccessiblebyNormativePedestrianWalksheds_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIsAccessiblebyNormativePedestrianWalksheds_5, 
                style: style_POIsAccessiblebyNormativePedestrianWalksheds_5,
                popuplayertitle: 'POIs Accessible by Normative Pedestrian Walksheds',
                interactive: true,
                title: '<img src="styles/legend/POIsAccessiblebyNormativePedestrianWalksheds_5.png" /> POIs Accessible by Normative Pedestrian Walksheds'
            });
var format_POIsAccessiblebyTypicalPedestrianWalksheds_6 = new ol.format.GeoJSON();
var features_POIsAccessiblebyTypicalPedestrianWalksheds_6 = format_POIsAccessiblebyTypicalPedestrianWalksheds_6.readFeatures(json_POIsAccessiblebyTypicalPedestrianWalksheds_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIsAccessiblebyTypicalPedestrianWalksheds_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIsAccessiblebyTypicalPedestrianWalksheds_6.addFeatures(features_POIsAccessiblebyTypicalPedestrianWalksheds_6);
var lyr_POIsAccessiblebyTypicalPedestrianWalksheds_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIsAccessiblebyTypicalPedestrianWalksheds_6, 
                style: style_POIsAccessiblebyTypicalPedestrianWalksheds_6,
                popuplayertitle: 'POIs Accessible by Typical Pedestrian Walksheds',
                interactive: true,
                title: '<img src="styles/legend/POIsAccessiblebyTypicalPedestrianWalksheds_6.png" /> POIs Accessible by Typical Pedestrian Walksheds'
            });
var format_POIsAccessiblebyRollingandManualWheelchairWalksheds_7 = new ol.format.GeoJSON();
var features_POIsAccessiblebyRollingandManualWheelchairWalksheds_7 = format_POIsAccessiblebyRollingandManualWheelchairWalksheds_7.readFeatures(json_POIsAccessiblebyRollingandManualWheelchairWalksheds_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIsAccessiblebyRollingandManualWheelchairWalksheds_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIsAccessiblebyRollingandManualWheelchairWalksheds_7.addFeatures(features_POIsAccessiblebyRollingandManualWheelchairWalksheds_7);
var lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIsAccessiblebyRollingandManualWheelchairWalksheds_7, 
                style: style_POIsAccessiblebyRollingandManualWheelchairWalksheds_7,
                popuplayertitle: 'POIs Accessible by Rolling and Manual Wheelchair Walksheds',
                interactive: true,
                title: '<img src="styles/legend/POIsAccessiblebyRollingandManualWheelchairWalksheds_7.png" /> POIs Accessible by Rolling and Manual Wheelchair Walksheds'
            });
var format_SeattlePublicSchools_8 = new ol.format.GeoJSON();
var features_SeattlePublicSchools_8 = format_SeattlePublicSchools_8.readFeatures(json_SeattlePublicSchools_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeattlePublicSchools_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeattlePublicSchools_8.addFeatures(features_SeattlePublicSchools_8);
var lyr_SeattlePublicSchools_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeattlePublicSchools_8, 
                style: style_SeattlePublicSchools_8,
                popuplayertitle: 'Seattle Public Schools',
                interactive: true,
                title: '<img src="styles/legend/SeattlePublicSchools_8.png" /> Seattle Public Schools'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NormativePedestrianWalksheds_1.setVisible(true);lyr_TypicalPedestrianWalksheds_2.setVisible(true);lyr_RollingandManualWheelchairWalksheds_3.setVisible(true);lyr_AllPOIs_4.setVisible(true);lyr_POIsAccessiblebyNormativePedestrianWalksheds_5.setVisible(true);lyr_POIsAccessiblebyTypicalPedestrianWalksheds_6.setVisible(true);lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_7.setVisible(true);lyr_SeattlePublicSchools_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NormativePedestrianWalksheds_1,lyr_TypicalPedestrianWalksheds_2,lyr_RollingandManualWheelchairWalksheds_3,lyr_AllPOIs_4,lyr_POIsAccessiblebyNormativePedestrianWalksheds_5,lyr_POIsAccessiblebyTypicalPedestrianWalksheds_6,lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_7,lyr_SeattlePublicSchools_8];
lyr_NormativePedestrianWalksheds_1.set('fieldAliases', {'_id': '_id', '_layer': '_layer', '_u': '_u', '_u_id': '_u_id', '_v': '_v', '_v_id': '_v_id', 'climb': 'climb', 'crossing_markings': 'crossing_markings', 'curbramps': 'curbramps', 'curbs': 'curbs', 'description': 'description', 'ext_at_intersection': 'ext_at_intersection', 'ext_corner_id': 'ext_corner_id', 'ext_covered': 'ext_covered', 'ext_fixme': 'ext_fixme', 'ext_from_intersection': 'ext_from_intersection', 'ext_line_description': 'ext_line_description', 'ext_line_type': 'ext_line_type', 'ext_lit': 'ext_lit', 'ext_material': 'ext_material', 'ext_node_description': 'ext_node_description', 'ext_note': 'ext_note', 'ext_osm_version': 'ext_osm_version', 'ext_ramp': 'ext_ramp', 'ext_side': 'ext_side', 'ext_sidewalk_corrected': 'ext_sidewalk_corrected', 'ext_sw_id': 'ext_sw_id', 'ext_to_intersection': 'ext_to_intersection', 'ext_website': 'ext_website', 'ext_width_confidence': 'ext_width_confidence', 'fid': 'fid', 'foot': 'foot', 'footway': 'footway', 'highway': 'highway', 'incline': 'incline', 'length': 'length', 'name': 'name', 'step_count': 'step_count', 'surface': 'surface', 'width': 'width', });
lyr_TypicalPedestrianWalksheds_2.set('fieldAliases', {'_id': '_id', '_layer': '_layer', '_u': '_u', '_u_id': '_u_id', '_v': '_v', '_v_id': '_v_id', 'climb': 'climb', 'crossing_markings': 'crossing_markings', 'curbramps': 'curbramps', 'curbs': 'curbs', 'description': 'description', 'ext_at_intersection': 'ext_at_intersection', 'ext_corner_id': 'ext_corner_id', 'ext_covered': 'ext_covered', 'ext_fixme': 'ext_fixme', 'ext_from_intersection': 'ext_from_intersection', 'ext_line_description': 'ext_line_description', 'ext_line_type': 'ext_line_type', 'ext_lit': 'ext_lit', 'ext_material': 'ext_material', 'ext_node_description': 'ext_node_description', 'ext_note': 'ext_note', 'ext_osm_version': 'ext_osm_version', 'ext_ramp': 'ext_ramp', 'ext_side': 'ext_side', 'ext_sidewalk_corrected': 'ext_sidewalk_corrected', 'ext_sw_id': 'ext_sw_id', 'ext_to_intersection': 'ext_to_intersection', 'ext_website': 'ext_website', 'ext_width_confidence': 'ext_width_confidence', 'fid': 'fid', 'foot': 'foot', 'footway': 'footway', 'highway': 'highway', 'incline': 'incline', 'length': 'length', 'name': 'name', 'step_count': 'step_count', 'surface': 'surface', 'width': 'width', });
lyr_RollingandManualWheelchairWalksheds_3.set('fieldAliases', {'_id': '_id', '_layer': '_layer', '_u': '_u', '_u_id': '_u_id', '_v': '_v', '_v_id': '_v_id', 'climb': 'climb', 'crossing_markings': 'crossing_markings', 'curbramps': 'curbramps', 'curbs': 'curbs', 'description': 'description', 'ext_at_intersection': 'ext_at_intersection', 'ext_corner_id': 'ext_corner_id', 'ext_covered': 'ext_covered', 'ext_fixme': 'ext_fixme', 'ext_from_intersection': 'ext_from_intersection', 'ext_line_description': 'ext_line_description', 'ext_line_type': 'ext_line_type', 'ext_lit': 'ext_lit', 'ext_material': 'ext_material', 'ext_node_description': 'ext_node_description', 'ext_note': 'ext_note', 'ext_osm_version': 'ext_osm_version', 'ext_ramp': 'ext_ramp', 'ext_side': 'ext_side', 'ext_sidewalk_corrected': 'ext_sidewalk_corrected', 'ext_sw_id': 'ext_sw_id', 'ext_to_intersection': 'ext_to_intersection', 'ext_website': 'ext_website', 'ext_width_confidence': 'ext_width_confidence', 'fid': 'fid', 'foot': 'foot', 'footway': 'footway', 'highway': 'highway', 'incline': 'incline', 'length': 'length', 'name': 'name', 'step_count': 'step_count', 'surface': 'surface', 'width': 'width', });
lyr_AllPOIs_4.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'overture_confidence': 'overture_confidence', 'node_id': 'node_id', });
lyr_POIsAccessiblebyNormativePedestrianWalksheds_5.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'node_id': 'node_id', 'overture_confidence': 'overture_confidence', });
lyr_POIsAccessiblebyTypicalPedestrianWalksheds_6.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'node_id': 'node_id', 'overture_confidence': 'overture_confidence', });
lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_7.set('fieldAliases', {'name': 'name', 'category': 'category', 'osm_key': 'osm_key', 'osm_value': 'osm_value', 'source': 'source', 'confidence': 'confidence', 'node_id': 'node_id', 'overture_confidence': 'overture_confidence', });
lyr_SeattlePublicSchools_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'school_ID': 'school_ID', 'school_name': 'school_name', 'mapLabel': 'mapLabel', 'status': 'status', 'grades': 'grades', 'esmshs': 'esmshs', 'siteID': 'siteID', 'address': 'address', 'zip': 'zip', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_NormativePedestrianWalksheds_1.set('fieldImages', {'_id': 'TextEdit', '_layer': 'TextEdit', '_u': 'TextEdit', '_u_id': 'TextEdit', '_v': 'TextEdit', '_v_id': 'TextEdit', 'climb': 'TextEdit', 'crossing_markings': 'TextEdit', 'curbramps': 'TextEdit', 'curbs': 'TextEdit', 'description': 'TextEdit', 'ext_at_intersection': 'TextEdit', 'ext_corner_id': 'TextEdit', 'ext_covered': 'TextEdit', 'ext_fixme': 'TextEdit', 'ext_from_intersection': 'TextEdit', 'ext_line_description': 'TextEdit', 'ext_line_type': 'TextEdit', 'ext_lit': 'TextEdit', 'ext_material': 'TextEdit', 'ext_node_description': 'TextEdit', 'ext_note': 'TextEdit', 'ext_osm_version': 'Range', 'ext_ramp': 'TextEdit', 'ext_side': 'TextEdit', 'ext_sidewalk_corrected': 'TextEdit', 'ext_sw_id': 'TextEdit', 'ext_to_intersection': 'TextEdit', 'ext_website': 'TextEdit', 'ext_width_confidence': 'TextEdit', 'fid': 'Range', 'foot': 'TextEdit', 'footway': 'TextEdit', 'highway': 'TextEdit', 'incline': 'TextEdit', 'length': 'TextEdit', 'name': 'TextEdit', 'step_count': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', });
lyr_TypicalPedestrianWalksheds_2.set('fieldImages', {'_id': 'TextEdit', '_layer': 'TextEdit', '_u': 'TextEdit', '_u_id': 'TextEdit', '_v': 'TextEdit', '_v_id': 'TextEdit', 'climb': 'TextEdit', 'crossing_markings': 'TextEdit', 'curbramps': 'TextEdit', 'curbs': 'TextEdit', 'description': 'TextEdit', 'ext_at_intersection': 'TextEdit', 'ext_corner_id': 'TextEdit', 'ext_covered': 'TextEdit', 'ext_fixme': 'TextEdit', 'ext_from_intersection': 'TextEdit', 'ext_line_description': 'TextEdit', 'ext_line_type': 'TextEdit', 'ext_lit': 'TextEdit', 'ext_material': 'TextEdit', 'ext_node_description': 'TextEdit', 'ext_note': 'TextEdit', 'ext_osm_version': 'Range', 'ext_ramp': 'TextEdit', 'ext_side': 'TextEdit', 'ext_sidewalk_corrected': 'TextEdit', 'ext_sw_id': 'TextEdit', 'ext_to_intersection': 'TextEdit', 'ext_website': 'TextEdit', 'ext_width_confidence': 'TextEdit', 'fid': 'Range', 'foot': 'TextEdit', 'footway': 'TextEdit', 'highway': 'TextEdit', 'incline': 'TextEdit', 'length': 'TextEdit', 'name': 'TextEdit', 'step_count': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', });
lyr_RollingandManualWheelchairWalksheds_3.set('fieldImages', {'_id': 'TextEdit', '_layer': 'TextEdit', '_u': 'TextEdit', '_u_id': 'TextEdit', '_v': 'TextEdit', '_v_id': 'TextEdit', 'climb': 'TextEdit', 'crossing_markings': 'TextEdit', 'curbramps': 'TextEdit', 'curbs': 'TextEdit', 'description': 'TextEdit', 'ext_at_intersection': 'TextEdit', 'ext_corner_id': 'TextEdit', 'ext_covered': 'TextEdit', 'ext_fixme': 'TextEdit', 'ext_from_intersection': 'TextEdit', 'ext_line_description': 'TextEdit', 'ext_line_type': 'TextEdit', 'ext_lit': 'TextEdit', 'ext_material': 'TextEdit', 'ext_node_description': 'TextEdit', 'ext_note': 'TextEdit', 'ext_osm_version': 'Range', 'ext_ramp': 'TextEdit', 'ext_side': 'TextEdit', 'ext_sidewalk_corrected': 'TextEdit', 'ext_sw_id': 'TextEdit', 'ext_to_intersection': 'TextEdit', 'ext_website': 'TextEdit', 'ext_width_confidence': 'TextEdit', 'fid': 'Range', 'foot': 'TextEdit', 'footway': 'TextEdit', 'highway': 'TextEdit', 'incline': 'TextEdit', 'length': 'TextEdit', 'name': 'TextEdit', 'step_count': 'TextEdit', 'surface': 'TextEdit', 'width': 'TextEdit', });
lyr_AllPOIs_4.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'Hidden', 'osm_value': 'Hidden', 'source': 'Hidden', 'confidence': 'Hidden', 'overture_confidence': 'Hidden', 'node_id': 'Hidden', });
lyr_POIsAccessiblebyNormativePedestrianWalksheds_5.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'Hidden', 'osm_value': 'Hidden', 'source': 'Hidden', 'confidence': 'Hidden', 'node_id': 'Hidden', 'overture_confidence': 'Hidden', });
lyr_POIsAccessiblebyTypicalPedestrianWalksheds_6.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'Hidden', 'osm_value': 'Hidden', 'source': 'Hidden', 'confidence': 'Hidden', 'node_id': 'Hidden', 'overture_confidence': 'Hidden', });
lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_7.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'osm_key': 'Hidden', 'osm_value': 'Hidden', 'source': 'Hidden', 'confidence': 'Hidden', 'node_id': 'Hidden', 'overture_confidence': 'Hidden', });
lyr_SeattlePublicSchools_8.set('fieldImages', {'OBJECTID': 'Hidden', 'school_ID': 'Hidden', 'school_name': 'TextEdit', 'mapLabel': 'Hidden', 'status': 'TextEdit', 'grades': 'TextEdit', 'esmshs': 'Hidden', 'siteID': 'Hidden', 'address': 'TextEdit', 'zip': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_NormativePedestrianWalksheds_1.set('fieldLabels', {'_id': 'inline label - visible with data', '_layer': 'inline label - visible with data', '_u': 'inline label - visible with data', '_u_id': 'inline label - visible with data', '_v': 'inline label - visible with data', '_v_id': 'inline label - visible with data', 'climb': 'inline label - visible with data', 'crossing_markings': 'inline label - visible with data', 'curbramps': 'inline label - visible with data', 'curbs': 'inline label - visible with data', 'description': 'inline label - visible with data', 'ext_at_intersection': 'inline label - visible with data', 'ext_corner_id': 'inline label - visible with data', 'ext_covered': 'inline label - visible with data', 'ext_fixme': 'inline label - visible with data', 'ext_from_intersection': 'inline label - visible with data', 'ext_line_description': 'inline label - visible with data', 'ext_line_type': 'inline label - visible with data', 'ext_lit': 'inline label - visible with data', 'ext_material': 'inline label - visible with data', 'ext_node_description': 'inline label - visible with data', 'ext_note': 'inline label - visible with data', 'ext_osm_version': 'inline label - visible with data', 'ext_ramp': 'inline label - visible with data', 'ext_side': 'inline label - visible with data', 'ext_sidewalk_corrected': 'inline label - visible with data', 'ext_sw_id': 'inline label - visible with data', 'ext_to_intersection': 'inline label - visible with data', 'ext_website': 'inline label - visible with data', 'ext_width_confidence': 'inline label - visible with data', 'fid': 'inline label - visible with data', 'foot': 'inline label - visible with data', 'footway': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'incline': 'inline label - visible with data', 'length': 'inline label - visible with data', 'name': 'inline label - visible with data', 'step_count': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'width': 'inline label - visible with data', });
lyr_TypicalPedestrianWalksheds_2.set('fieldLabels', {'_id': 'inline label - visible with data', '_layer': 'inline label - visible with data', '_u': 'inline label - visible with data', '_u_id': 'inline label - visible with data', '_v': 'inline label - visible with data', '_v_id': 'inline label - visible with data', 'climb': 'inline label - visible with data', 'crossing_markings': 'inline label - visible with data', 'curbramps': 'inline label - visible with data', 'curbs': 'inline label - visible with data', 'description': 'inline label - visible with data', 'ext_at_intersection': 'inline label - visible with data', 'ext_corner_id': 'inline label - visible with data', 'ext_covered': 'inline label - visible with data', 'ext_fixme': 'inline label - visible with data', 'ext_from_intersection': 'inline label - visible with data', 'ext_line_description': 'inline label - visible with data', 'ext_line_type': 'inline label - visible with data', 'ext_lit': 'inline label - visible with data', 'ext_material': 'inline label - visible with data', 'ext_node_description': 'inline label - visible with data', 'ext_note': 'inline label - visible with data', 'ext_osm_version': 'inline label - visible with data', 'ext_ramp': 'inline label - visible with data', 'ext_side': 'inline label - visible with data', 'ext_sidewalk_corrected': 'inline label - visible with data', 'ext_sw_id': 'inline label - visible with data', 'ext_to_intersection': 'inline label - visible with data', 'ext_website': 'inline label - visible with data', 'ext_width_confidence': 'inline label - visible with data', 'fid': 'inline label - visible with data', 'foot': 'inline label - visible with data', 'footway': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'incline': 'inline label - visible with data', 'length': 'inline label - visible with data', 'name': 'inline label - visible with data', 'step_count': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'width': 'inline label - visible with data', });
lyr_RollingandManualWheelchairWalksheds_3.set('fieldLabels', {'_id': 'inline label - visible with data', '_layer': 'inline label - visible with data', '_u': 'inline label - visible with data', '_u_id': 'inline label - visible with data', '_v': 'inline label - visible with data', '_v_id': 'inline label - visible with data', 'climb': 'inline label - visible with data', 'crossing_markings': 'inline label - visible with data', 'curbramps': 'inline label - visible with data', 'curbs': 'inline label - visible with data', 'description': 'inline label - visible with data', 'ext_at_intersection': 'inline label - visible with data', 'ext_corner_id': 'inline label - visible with data', 'ext_covered': 'inline label - visible with data', 'ext_fixme': 'inline label - visible with data', 'ext_from_intersection': 'inline label - visible with data', 'ext_line_description': 'inline label - visible with data', 'ext_line_type': 'inline label - visible with data', 'ext_lit': 'inline label - visible with data', 'ext_material': 'inline label - visible with data', 'ext_node_description': 'inline label - visible with data', 'ext_note': 'inline label - visible with data', 'ext_osm_version': 'inline label - visible with data', 'ext_ramp': 'inline label - visible with data', 'ext_side': 'inline label - visible with data', 'ext_sidewalk_corrected': 'inline label - visible with data', 'ext_sw_id': 'inline label - visible with data', 'ext_to_intersection': 'inline label - visible with data', 'ext_website': 'inline label - visible with data', 'ext_width_confidence': 'inline label - visible with data', 'fid': 'inline label - visible with data', 'foot': 'inline label - visible with data', 'footway': 'inline label - visible with data', 'highway': 'inline label - visible with data', 'incline': 'inline label - visible with data', 'length': 'inline label - visible with data', 'name': 'inline label - visible with data', 'step_count': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'width': 'inline label - visible with data', });
lyr_AllPOIs_4.set('fieldLabels', {'name': 'inline label - visible with data', 'category': 'inline label - visible with data', });
lyr_POIsAccessiblebyNormativePedestrianWalksheds_5.set('fieldLabels', {'name': 'inline label - visible with data', 'category': 'inline label - visible with data', });
lyr_POIsAccessiblebyTypicalPedestrianWalksheds_6.set('fieldLabels', {'name': 'inline label - visible with data', 'category': 'inline label - visible with data', });
lyr_POIsAccessiblebyRollingandManualWheelchairWalksheds_7.set('fieldLabels', {'name': 'inline label - visible with data', 'category': 'inline label - visible with data', });
lyr_SeattlePublicSchools_8.set('fieldLabels', {'school_name': 'inline label - visible with data', 'status': 'inline label - visible with data', 'grades': 'inline label - visible with data', 'address': 'inline label - visible with data', });
lyr_SeattlePublicSchools_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});