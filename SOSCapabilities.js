<?xml version="1.0" encoding="UTF-8"?>
<sos_Capabilities version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sos/1.0 http://schemas.opengis.net/sos/1.0.0/sosAll.xsd" xmlns:sos="http://www.opengis.net/sos/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
  <ows_ServiceIdentification>
    <ows_Title>IFGI WeatherSOS</ows_Title>
    <ows_Abstract>SOS for weather observations at IFGI, Muenster, Germany (SVN: 9075 @ 2010-10-06 11:44:30)</ows_Abstract>
    <ows_Keywords>
      <ows_Keyword>temperature, humidity, wind speed, luminance, wind, wind direction, rain, pressure, weather</ows_Keyword>
    </ows_Keywords>
    <ows_ServiceType codeSpace="http://opengeospatial.net">OGC:SOS</ows_ServiceType>
    <ows_ServiceTypeVersion>1.0.0</ows_ServiceTypeVersion>
    <ows_Fees>NONE</ows_Fees>
    <ows_AccessConstraints>NONE</ows_AccessConstraints>
  </ows_ServiceIdentification>
  <ows_ServiceProvider>
    <ows_ProviderName>52North</ows_ProviderName>
    <ows_ProviderSite xlink:href="http://52north.org/swe"/>
    <ows_ServiceContact>
      <ows_IndividualName>Daniel Nuest, Felix Bache</ows_IndividualName>
      <ows_PositionName>Developer</ows_PositionName>
      <ows_ContactInfo>
        <ows_Phone>
          <ows_Voice>+49(0)251/396 371-0</ows_Voice>
        </ows_Phone>
        <ows_Address>
          <ows_DeliveryPoint>Marin-Luther-King-Weg 24</ows_DeliveryPoint>
          <ows_City>Muenster</ows_City>
          <ows_AdministrativeArea>North Rhine-Westphalia</ows_AdministrativeArea>
          <ows_PostalCode>48155</ows_PostalCode>
          <ows_Country>Germany</ows_Country>
          <ows_ElectronicMailAddress>info@52north.org</ows_ElectronicMailAddress>
        </ows_Address>
      </ows_ContactInfo>
      <ows_Role/>
    </ows_ServiceContact>
  </ows_ServiceProvider>
  <ows_OperationsMetadata>
    <ows_Operation name="GetCapabilities">
      <ows_DCP>
        <ows_HTTP>
          <ows_Get xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos?"/>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="updateSequence">
        <ows_AnyValue/>
      </ows_Parameter>
      <ows_Parameter name="AcceptVersions">
        <ows_AllowedValues>
          <ows_Value>1.0.0</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="Sections">
        <ows_AllowedValues>
          <ows_Value>ServiceIdentification</ows_Value>
          <ows_Value>ServiceProvider</ows_Value>
          <ows_Value>OperationsMetadata</ows_Value>
          <ows_Value>Filter_Capabilities</ows_Value>
          <ows_Value>Contents</ows_Value>
          <ows_Value>All</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="AcceptFormats">
        <ows_AllowedValues>
          <ows_Value>text/xml</ows_Value>
          <ows_Value>application/zip</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="GetObservation">
      <ows_DCP>
        <ows_HTTP>
          <ows_Get xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos?"/>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="srsName">
        <ows_AnyValue/>
      </ows_Parameter>
      <ows_Parameter name="offering">
        <ows_AllowedValues>
          <ows_Value>RAIN_GAUGE</ows_Value>
          <ows_Value>LUMINANCE</ows_Value>
          <ows_Value>HUMIDITY</ows_Value>
          <ows_Value>ATMOSPHERIC_PRESSURE</ows_Value>
          <ows_Value>ATMOSPHERIC_TEMPERATURE</ows_Value>
          <ows_Value>WIND_SPEED</ows_Value>
          <ows_Value>WIND_DIRECTION</ows_Value>
          <ows_Value>VISIBILITY</ows_Value>
          <ows_Value>WEATHER_CODE</ows_Value>
          <ows_Value>voltage</ows_Value>
          <ows_Value>electric_current</ows_Value>
          <ows_Value>PatientCondition</ows_Value>
          <ows_Value>TEMPERATURE</ows_Value>
          <ows_Value>GAUGE_HEIGHT</ows_Value>
          <ows_Value>phyto</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="eventTime">
        <ows_AllowedValues>
          <ows_Range>
            <ows_MinimumValue>2008-02-14T11:03:02.000+01:00</ows_MinimumValue>
            <ows_MaximumValue>2012-03-06T09:34:00.000+01:00</ows_MaximumValue>
          </ows_Range>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="procedure">
        <ows_AllowedValues>
          <ows_Value>PowerEdgePress-Device0</ows_Value>
          <ows_Value>lulong</ows_Value>
          <ows_Value>patient_059345457</ows_Value>
          <ows_Value>patient_A</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-1</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-3</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:ISE:SamplingCountingMethodPhyto01</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="observedProperty">
        <ows_AllowedValues>
          <ows_Value>urn:x-ogc:def:property:OGC::Precipitation1Hour</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::Precipitation1Hour</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::Luminance</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::Luminance</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::RelativeHumidity</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::RelativeHumidity</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::BarometricPressure</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::BarometricPressure</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::Temperature</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::Temperature</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::AirTemperature</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::WindSpeed</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::WindSpeed</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::WindDirection</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::WindDirection</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::visibilityRange</ows_Value>
          <ows_Value>http://booty.org.uk/booty.weather/metinfo/codes/Code_4680.htm</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:voltage</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:current</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:patientCondition</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:temperature</ows_Value>
          <ows_Value>lulong:waterlevel</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:waterlevel1</ows_Value>
          <ows_Value>urn:lsid:catalogueoflife.org:taxon:ecca8714-29c1-102b-9a4a-00304854f820:col20101221</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_biomass</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_density</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_depht</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="featureOfInterest">
        <ows_AllowedValues>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>foi_1001</ows_Value>
          <ows_Value>foi_2001</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="result">
        <ows_AnyValue/>
      </ows_Parameter>
      <ows_Parameter name="responseFormat">
        <ows_AllowedValues>
          <ows_Value>text/xml;subtype="om/1.0.0"</ows_Value>
          <ows_Value>application/zip</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="resultModel">
        <ows_AllowedValues>
          <ows_Value>om:Observation</ows_Value>
          <ows_Value>om:Measurement</ows_Value>
          <ows_Value>om:CategoryObservation</ows_Value>
          <ows_Value>om:SpatialObservation</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="responseMode">
        <ows_AllowedValues>
          <ows_Value>inline</ows_Value>
          <ows_Value>resultTemplate</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="DescribeSensor">
      <ows_DCP>
        <ows_HTTP>
          <ows_Get xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos?"/>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="procedure">
        <ows_AllowedValues>
          <ows_Value>PowerEdgePress-Device0</ows_Value>
          <ows_Value>lulong</ows_Value>
          <ows_Value>patient_059345457</ows_Value>
          <ows_Value>patient_A</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-1</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-3</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:ISE:SamplingCountingMethodPhyto01</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="outputFormat">
        <ows_AllowedValues>
          <ows_Value>text/xml;subtype="sensorML/1.0.1"</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="GetFeatureOfInterest">
      <ows_DCP>
        <ows_HTTP>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="featureOfInterestID">
        <ows_AllowedValues>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>foi_1001</ows_Value>
          <ows_Value>foi_2001</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="location">
        <ows_AnyValue/>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="RegisterSensor">
      <ows_DCP>
        <ows_HTTP/>
      </ows_DCP>
      <ows_Parameter name="SensorDescription">
        <ows_AllowedValues>
          <ows_Value>sml:System</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="ObservationTemplate">
        <ows_AllowedValues>
          <ows_Value>om:Observation</ows_Value>
          <ows_Value>om:Measurement</ows_Value>
          <ows_Value>om:CategoryObservation</ows_Value>
          <ows_Value>om:SpatialObservation</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="InsertObservation">
      <ows_DCP>
        <ows_HTTP>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="AssignedSensorId">
        <ows_AllowedValues>
          <ows_Value>PowerEdgePress-Device0</ows_Value>
          <ows_Value>lulong</ows_Value>
          <ows_Value>patient_059345457</ows_Value>
          <ows_Value>patient_A</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-1</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-3</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:ISE:SamplingCountingMethodPhyto01</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="Observation">
        <ows_AllowedValues>
          <ows_Value>om:Observation</ows_Value>
          <ows_Value>om:Measurement</ows_Value>
          <ows_Value>om:CategoryObservation</ows_Value>
          <ows_Value>om:SpatialObservation</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="GetFeatureOfInterestTime">
      <ows_DCP>
        <ows_HTTP>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="featureOfInterestID">
        <ows_AllowedValues>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>foi_1001</ows_Value>
          <ows_Value>foi_2001</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="location">
        <ows_AnyValue/>
      </ows_Parameter>
      <ows_Parameter name="procedure">
        <ows_AllowedValues>
          <ows_Value>PowerEdgePress-Device0</ows_Value>
          <ows_Value>lulong</ows_Value>
          <ows_Value>patient_059345457</ows_Value>
          <ows_Value>patient_A</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-1</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-3</ows_Value>
          <ows_Value>urn:ogc:object:feature:Sensor:ISE:SamplingCountingMethodPhyto01</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="observedProperty">
        <ows_AllowedValues>
          <ows_Value>urn:x-ogc:def:property:OGC::Precipitation1Hour</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::Precipitation1Hour</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::Luminance</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::Luminance</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::RelativeHumidity</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::RelativeHumidity</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::BarometricPressure</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::BarometricPressure</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::Temperature</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::Temperature</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::AirTemperature</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::WindSpeed</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::WindSpeed</ows_Value>
          <ows_Value>urn:x-ogc:def:property:OGC::WindDirection</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::WindDirection</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC::visibilityRange</ows_Value>
          <ows_Value>http://booty.org.uk/booty.weather/metinfo/codes/Code_4680.htm</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:voltage</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:current</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:patientCondition</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:temperature</ows_Value>
          <ows_Value>lulong:waterlevel</ows_Value>
          <ows_Value>urn:ogc:def:phenomenon:OGC:1.0.30:waterlevel1</ows_Value>
          <ows_Value>urn:lsid:catalogueoflife.org:taxon:ecca8714-29c1-102b-9a4a-00304854f820:col20101221</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_biomass</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_density</ows_Value>
          <ows_Value>urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_depht</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="GetObservationById">
      <ows_DCP>
        <ows_HTTP>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="ObservationId">
        <ows_AllowedValues>
          <ows_Range>
            <ows_MinimumValue>1</ows_MinimumValue>
            <ows_MinimumValue>6187008</ows_MinimumValue>
          </ows_Range>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="srsName">
        <ows_AnyValue/>
      </ows_Parameter>
      <ows_Parameter name="responseFormat">
        <ows_AllowedValues>
          <ows_Value>text/xml;subtype="om/1.0.0"</ows_Value>
          <ows_Value>application/zip</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="resultModel">
        <ows_AllowedValues>
          <ows_Value>om:Observation</ows_Value>
          <ows_Value>om:Measurement</ows_Value>
          <ows_Value>om:CategoryObservation</ows_Value>
          <ows_Value>om:SpatialObservation</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
      <ows_Parameter name="responseMode">
        <ows_AllowedValues>
          <ows_Value>inline</ows_Value>
          <ows_Value>resultTemplate</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="GetResult">
      <ows_DCP>
        <ows_HTTP>
          <ows_Post xlink:href="http://v-swe.uni-muenster.de:8080/WeatherSOS/sos"/>
        </ows_HTTP>
      </ows_DCP>
      <ows_Parameter name="ObservationTemplateId">
        <ows_AnyValue/>
      </ows_Parameter>
      <ows_Parameter name="eventTime">
        <ows_AllowedValues>
          <ows_Range>
            <ows_MinimumValue>2008-02-14T11:03:02.000+01:00</ows_MinimumValue>
            <ows_MaximumValue>2012-03-06T09:34:00.000+01:00</ows_MaximumValue>
          </ows_Range>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Operation name="DescribeFeatureOfInterest">
      <ows_DCP>
        <ows_HTTP/>
      </ows_DCP>
      <ows_Parameter name="FeatureId">
        <ows_AllowedValues>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111</ows_Value>
          <ows_Value>urn:ogc:object:feature:kli:1</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4</ows_Value>
          <ows_Value>urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601</ows_Value>
          <ows_Value>foi_1001</ows_Value>
          <ows_Value>foi_2001</ows_Value>
        </ows_AllowedValues>
      </ows_Parameter>
    </ows_Operation>
    <ows_Parameter name="service">
      <ows_AllowedValues>
        <ows_Value>SOS</ows_Value>
      </ows_AllowedValues>
    </ows_Parameter>
    <ows_Parameter name="version">
      <ows_AllowedValues>
        <ows_Value>1.0.0</ows_Value>
      </ows_AllowedValues>
    </ows_Parameter>
  </ows_OperationsMetadata>
  <sos_Filter_Capabilities>
    <ogc:Spatial_Capabilities>
      <ogc:GeometryOperands>
        <ogc:GeometryOperand>gml:Envelope</ogc:GeometryOperand>
        <ogc:GeometryOperand>gml:Point</ogc:GeometryOperand>
        <ogc:GeometryOperand>gml:LineString</ogc:GeometryOperand>
        <ogc:GeometryOperand>gml:Polygon</ogc:GeometryOperand>
      </ogc:GeometryOperands>
      <ogc:SpatialOperators>
        <ogc:SpatialOperator name="BBOX">
          <ogc:GeometryOperands>
            <ogc:GeometryOperand>gml:Envelope</ogc:GeometryOperand>
          </ogc:GeometryOperands>
        </ogc:SpatialOperator>
        <ogc:SpatialOperator name="Contains">
          <ogc:GeometryOperands>
            <ogc:GeometryOperand>gml:Point</ogc:GeometryOperand>
            <ogc:GeometryOperand>gml:LineString</ogc:GeometryOperand>
            <ogc:GeometryOperand>gml:Polygon</ogc:GeometryOperand>
          </ogc:GeometryOperands>
        </ogc:SpatialOperator>
        <ogc:SpatialOperator name="Intersects">
          <ogc:GeometryOperands>
            <ogc:GeometryOperand>gml:Point</ogc:GeometryOperand>
            <ogc:GeometryOperand>gml:LineString</ogc:GeometryOperand>
            <ogc:GeometryOperand>gml:Polygon</ogc:GeometryOperand>
          </ogc:GeometryOperands>
        </ogc:SpatialOperator>
        <ogc:SpatialOperator name="Overlaps">
          <ogc:GeometryOperands>
            <ogc:GeometryOperand>gml:Point</ogc:GeometryOperand>
            <ogc:GeometryOperand>gml:LineString</ogc:GeometryOperand>
            <ogc:GeometryOperand>gml:Polygon</ogc:GeometryOperand>
          </ogc:GeometryOperands>
        </ogc:SpatialOperator>
      </ogc:SpatialOperators>
    </ogc:Spatial_Capabilities>
    <ogc:Temporal_Capabilities>
      <ogc:TemporalOperands>
        <ogc:TemporalOperand>gml:TimePeriod</ogc:TemporalOperand>
        <ogc:TemporalOperand>gml:TimeInstant</ogc:TemporalOperand>
      </ogc:TemporalOperands>
      <ogc:TemporalOperators>
        <ogc:TemporalOperator name="TM_During">
          <ogc:TemporalOperands>
            <ogc:TemporalOperand>gml:TimePeriod</ogc:TemporalOperand>
          </ogc:TemporalOperands>
        </ogc:TemporalOperator>
        <ogc:TemporalOperator name="TM_Equals">
          <ogc:TemporalOperands>
            <ogc:TemporalOperand>gml:TimeInstant</ogc:TemporalOperand>
          </ogc:TemporalOperands>
        </ogc:TemporalOperator>
        <ogc:TemporalOperator name="TM_After">
          <ogc:TemporalOperands>
            <ogc:TemporalOperand>gml:TimeInstant</ogc:TemporalOperand>
          </ogc:TemporalOperands>
        </ogc:TemporalOperator>
        <ogc:TemporalOperator name="TM_Before">
          <ogc:TemporalOperands>
            <ogc:TemporalOperand>gml:TimeInstant</ogc:TemporalOperand>
          </ogc:TemporalOperands>
        </ogc:TemporalOperator>
      </ogc:TemporalOperators>
    </ogc:Temporal_Capabilities>
    <ogc:Scalar_Capabilities>
      <ogc:ComparisonOperators>
        <ogc:ComparisonOperator>Between</ogc:ComparisonOperator>
        <ogc:ComparisonOperator>EqualTo</ogc:ComparisonOperator>
        <ogc:ComparisonOperator>NotEqualTo</ogc:ComparisonOperator>
        <ogc:ComparisonOperator>LessThan</ogc:ComparisonOperator>
        <ogc:ComparisonOperator>LessThanEqualTo</ogc:ComparisonOperator>
        <ogc:ComparisonOperator>GreaterThan</ogc:ComparisonOperator>
        <ogc:ComparisonOperator>GreaterThanEqualTo</ogc:ComparisonOperator>
        <ogc:ComparisonOperator>Like</ogc:ComparisonOperator>
      </ogc:ComparisonOperators>
    </ogc:Scalar_Capabilities>
    <ogc:Id_Capabilities>
      <ogc:FID/>
      <ogc:EID/>
    </ogc:Id_Capabilities>
  </sos_Filter_Capabilities>
  <sos_Contents>
    <sos_ObservationOfferingList>
      <sos_ObservationOffering gml:id="RAIN_GAUGE">
        <gml_name>Rain</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>46.611644 7.6103</gml_lowerCorner>
            <gml_upperCorner>51.9412 13.883498</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-11-20T15:35:22.000+01:00</gml_beginPosition>
            <gml_endPosition>2012-03-06T09:34:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::Precipitation1Hour"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::Precipitation1Hour"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="LUMINANCE">
        <gml_name>Luminance</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>46.611644 7.6103</gml_lowerCorner>
            <gml_upperCorner>51.9412 13.883498</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-11-20T15:20:22.000+01:00</gml_beginPosition>
            <gml_endPosition>2012-03-06T09:34:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::Luminance"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::Luminance"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="HUMIDITY">
        <gml_name>Humidity of the atmosphere</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>46.611644 7.6103</gml_lowerCorner>
            <gml_upperCorner>51.9412 13.883498</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-02-14T11:03:02.000+01:00</gml_beginPosition>
            <gml_endPosition>2012-03-06T09:34:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:kli:1"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::RelativeHumidity"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::RelativeHumidity"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="ATMOSPHERIC_PRESSURE">
        <gml_name>Pressure of the atmosphere</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>46.611644 7.6103</gml_lowerCorner>
            <gml_upperCorner>51.9412 13.883498</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-12-20T02:29:27.000+01:00</gml_beginPosition>
            <gml_endPosition>2012-03-06T09:34:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:kli:1"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::BarometricPressure"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::BarometricPressure"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="ATMOSPHERIC_TEMPERATURE">
        <gml_name>Temperature of the atmosphere</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>46.611644 7.6103</gml_lowerCorner>
            <gml_upperCorner>51.9412 13.883498</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-11-20T15:20:22.000+01:00</gml_beginPosition>
            <gml_endPosition>2012-03-06T09:34:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:kli:1"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::Temperature"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::Temperature"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::AirTemperature"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="WIND_SPEED">
        <gml_name>Speed of the wind</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>46.611644 4.5</gml_lowerCorner>
            <gml_upperCorner>52.0 13.883498</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-11-20T15:20:22.000+01:00</gml_beginPosition>
            <gml_endPosition>2012-03-06T09:34:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:kli:1"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::WindSpeed"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::WindSpeed"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="WIND_DIRECTION">
        <gml_name>Direction of the wind</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>46.611644 7.6103</gml_lowerCorner>
            <gml_upperCorner>51.9412 13.883498</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-11-20T15:20:22.000+01:00</gml_beginPosition>
            <gml_endPosition>2012-03-06T09:34:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:2f673b97-c7ce-48df-b2d2-10b4ecf0cf85"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:302ab595-5840-41b1-a11b-a0cb14fc3df4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:33df75fe-1f7c-4ed3-8062-01d49a134257"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:4fdde076-8080-43b0-9efa-4e3efd4fcc8e"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:55f02637-e61f-41f4-b1d3-452816197ee5"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:75e85e64-2d9f-48a9-90c6-8f0008c74ff4"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b3f0384c-6aa8-48e5-9dda-d537029b7a95"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:b4b9d260-f238-456a-b5cb-ca9dc0564601"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:kli:1"/>
        <sos_observedProperty xlink:href="urn:x-ogc:def:property:OGC::WindDirection"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::WindDirection"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:3d3b239f-7696-4864-9d07-15447eae2b93"/>
        <sos_featureOfInterest xlink:href="urn:ogc:object:feature:OSIRIS-HWS:efeb807b-bd24-4128-a920-f6729bcdd111"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="VISIBILITY">
        <gml_name>Visibility range in the atmosphere</gml_name>
        <gml_boundedBy>
          <gml_Envelope>
            <gml_lowerCorner/>
            <gml_upperCorner/>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2011-01-01T11:20:00.000+01:00</gml_beginPosition>
            <gml_endPosition>2011-01-01T11:20:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:kli:1"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC::visibilityRange"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="WEATHER_CODE">
        <gml_name>WMO 4680 weather code</gml_name>
        <gml_boundedBy>
          <gml_Envelope>
            <gml_lowerCorner/>
            <gml_upperCorner/>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2011-01-01T11:20:00.000+01:00</gml_beginPosition>
            <gml_endPosition>2011-01-01T11:20:00.000+01:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="urn:ogc:object:feature:kli:1"/>
        <sos_observedProperty xlink:href="http://booty.org.uk/booty.weather/metinfo/codes/Code_4680.htm"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="voltage">
        <gml_name>voltage in Device0</gml_name>
        <gml_boundedBy>
          <gml_Envelope>
            <gml_lowerCorner/>
            <gml_upperCorner/>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time/>
        <sos_procedure xlink:href="PowerEdgePress-Device0"/>
        <sos_observedProperty xlink:href="urn:ogc:def:phenomenon:OGC:1.0.30:voltage"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:CategoryObservation</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="electric_current">
        <gml_name>electric current in Deviceo</gml_name>
        <gml_boundedBy>
          <gml_Envelope>
            <gml_lowerCorner/>
            <gml_upperCorner/>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time/>
        <sos_procedure xlink:href="PowerEdgePress-Device0"/>
        <sos_observedProperty xlink:href="urn:ogc:def:phenomenon:OGC:1.0.30:current"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:CategoryObservation</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="PatientCondition">
        <gml_name>Condition of patient</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>51.7167 8.76667</gml_lowerCorner>
            <gml_upperCorner>51.7167 8.76667</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-04-02T17:44:15.000+02:00</gml_beginPosition>
            <gml_endPosition>2008-04-02T17:44:15.000+02:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="patient_059345457"/>
        <sos_procedure xlink:href="patient_A"/>
        <sos_observedProperty xlink:href="urn:ogc:def:phenomenon:OGC:1.0.30:patientCondition"/>
        <sos_featureOfInterest xlink:href="foi_2001"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:CategoryObservation</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="TEMPERATURE">
        <gml_name>Weather in Muenster</gml_name>
        <gml_boundedBy>
          <gml_Envelope>
            <gml_lowerCorner/>
            <gml_upperCorner/>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time/>
        <sos_procedure xlink:href="urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-3"/>
        <sos_observedProperty xlink:href="urn:ogc:def:phenomenon:OGC:1.0.30:temperature"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="GAUGE_HEIGHT">
        <gml_name>gauge height in Muenster</gml_name>
        <gml_boundedBy>
          <gml_Envelope srsName="urn:ogc:def:crs:EPSG:4326">
            <gml_lowerCorner>121.4688 31.2409</gml_lowerCorner>
            <gml_upperCorner>121.4688 31.2409</gml_upperCorner>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time>
          <gml_TimePeriod xsi:type="gml:TimePeriodType">
            <gml_beginPosition>2008-04-01T19:44:15.000+02:00</gml_beginPosition>
            <gml_endPosition>2008-04-01T19:44:15.000+02:00</gml_endPosition>
          </gml_TimePeriod>
        </sos_time>
        <sos_procedure xlink:href="lulong"/>
        <sos_procedure xlink:href="urn:ogc:object:feature:Sensor:IFGI:ifgi-sensor-1"/>
        <sos_observedProperty xlink:href="lulong:waterlevel"/>
        <sos_observedProperty xlink:href="urn:ogc:def:phenomenon:OGC:1.0.30:waterlevel1"/>
        <sos_featureOfInterest xlink:href="foi_1001"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
      <sos_ObservationOffering gml:id="phyto">
        <gml_name>Phytoplankton</gml_name>
        <gml_boundedBy>
          <gml_Envelope>
            <gml_lowerCorner/>
            <gml_upperCorner/>
          </gml_Envelope>
        </gml_boundedBy>
        <sos_time/>
        <sos_procedure xlink:href="urn:ogc:object:feature:Sensor:ISE:SamplingCountingMethodPhyto01"/>
        <sos_observedProperty xlink:href="urn:lsid:catalogueoflife.org:taxon:ecca8714-29c1-102b-9a4a-00304854f820:col20101221"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_biomass"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_density"/>
        <sos_observedProperty xlink:href="urn:ogc:def:property:OGC:1.0.30:aphanizomenon_flos-aquae_depht"/>
        <sos_responseFormat>text/xml;subtype="om/1.0.0"</sos_responseFormat>
        <sos_responseFormat>application/zip</sos_responseFormat>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Measurement</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:Observation</sos_resultModel>
        <sos_resultModel xmlns:ns="http://www.opengis.net/om/1.0">ns:CategoryObservation</sos_resultModel>
        <sos_responseMode>inline</sos_responseMode>
        <sos_responseMode>resultTemplate</sos_responseMode>
      </sos_ObservationOffering>
    </sos_ObservationOfferingList>
  </sos_Contents>
</sos_Capabilities>