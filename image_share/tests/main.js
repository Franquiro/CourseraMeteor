import assert from "assert";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
Images=new Mongo.Collection("images");
describe("image_share", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "image_share");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
