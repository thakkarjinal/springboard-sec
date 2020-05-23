describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice'; 
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should clear input after submitting server info', function () {
    submitServerInfo();

    expect(serverNameInput.value).toEqual('');
  });

  it('should create a new table entry on updateServerTable()', function () {
    allServers['server1'] = { serverName: 'Alice' };
    updateServerTable();
    expect(serverTbody.childElementCount).toEqual(1);
  })

  it('should have correct server name and amount on updateServerTable()', function () {
    allServers['server1'] = { serverName: 'Alice' };
    updateServerTable();
    let tr = serverTbody.getElementsByTagName('td');
    expect(tr[0].innerText).toEqual('Alice');
    expect(tr[1].innerText).toEqual('$0.00');
  })

  afterEach(function() {
    allServers = {};
    serverTbody.innerHTML = '';
    serverNameInput.value = ''; 
  });
});
