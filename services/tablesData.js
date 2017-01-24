module.exports = {
	Role:[{"name":"id","_type":"column","dataType":"Id","required":true,"unique":true,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"expires","_type":"column","dataType":"DateTime","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"updatedAt","_type":"column","dataType":"DateTime","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"createdAt","_type":"column","dataType":"DateTime","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"ACL","_type":"column","dataType":"ACL","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"name","_type":"column","dataType":"Text","required":true,"unique":true,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false}],
	Device:[{"name":"id","_type":"column","dataType":"Id","required":true,"unique":true,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"expires","_type":"column","dataType":"DateTime","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"updatedAt","_type":"column","dataType":"DateTime","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"createdAt","_type":"column","dataType":"DateTime","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"ACL","_type":"column","dataType":"ACL","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"channels","_type":"column","dataType":"List","required":false,"unique":false,"relatedTo":"Text","relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"deviceToken","_type":"column","dataType":"Text","required":false,"unique":true,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"deviceOS","_type":"column","dataType":"Text","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"timezone","_type":"column","dataType":"Text","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false},{"name":"metadata","_type":"column","dataType":"Object","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false}],
	User:[{"name":"id","_type":"column","dataType":"Id","required":true,"unique":true,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"expires","_type":"column","dataType":"DateTime","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"updatedAt","_type":"column","dataType":"DateTime","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"createdAt","_type":"column","dataType":"DateTime","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"ACL","_type":"column","dataType":"ACL","required":true,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"username","_type":"column","dataType":"Text","required":false,"unique":true,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"roles","_type":"column","dataType":"List","required":false,"unique":false,"relatedTo":"Role","relationType":"table","isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"password","_type":"column","dataType":"EncryptedText","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"email","_type":"column","dataType":"Email","required":false,"unique":true,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"socialAuth","_type":"column","dataType":"List","required":false,"unique":false,"relatedTo":"Object","relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null},{"name":"verified","_type":"column","dataType":"Boolean","required":false,"unique":false,"relatedTo":null,"relationType":null,"isDeletable":false,"isEditable":false,"isRenamable":false,"editableByMasterKey":false,"defaultValue":null}]
}