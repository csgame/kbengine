/*-----------------------------------------------------------------------------------------
												entity
-----------------------------------------------------------------------------------------*/
function KBENPC()
{
	this.__init__ = function()
	{
		KBEGameObject.prototype.__init__.call(this);
	}
	
	this.__init__();
}

KBENPC.prototype = new KBEGameObject();
