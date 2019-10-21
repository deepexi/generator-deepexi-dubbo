'use strict';

const _ = require('lodash');
const AbstractTemplateHandler = require('yo-power-generator').AbstractTemplateHandler;
const fileUtils = require('yo-power-generator').FileUtils;

class DirectTemplateHandler extends AbstractTemplateHandler {
  _handle0 () {
    const destTpl = _.template(fileUtils.tmplToFileName(this.tmpl));
    this.generator.fs.write(
      this.generator.destinationPath(destTpl(this.props)),
      this.generator.fs.read(this.generator.templatePath(this.tmpl))
    )
  }
}

module.exports = {
  key: 'direct',
  cls: DirectTemplateHandler
};
