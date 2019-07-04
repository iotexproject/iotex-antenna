"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbiFunctions = getAbiFunctions;
exports.getArgTypes = getArgTypes;
exports.getHeaderHash = getHeaderHash;
exports.encodeArguments = encodeArguments;
exports.encodeInputData = encodeInputData;
exports.Constructor = void 0;

var _ethereumjsAbi = _interopRequireDefault(require("ethereumjs-abi"));

var address = _interopRequireWildcard(require("../crypto/address"));

var _hash = require("../crypto/hash");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* tslint:disable:no-any */
function getAbiFunctions(abi) {
  const abiFunctions = {};
  abi.forEach(f => {
    if (f.type === "function") {
      abiFunctions[f.name] = f;
    }

    if (f.type === "constructor") {
      abiFunctions[Constructor] = f;
    }
  });
  return abiFunctions;
}

function getArgTypes(fnAbi) {
  const args = [];
  fnAbi.inputs.forEach(field => {
    args.push({
      name: field.name,
      type: field.type
    });
  });
  return args;
}

function getHeaderHash(fnAbi, args) {
  const inputs = args.map(i => {
    return i.type;
  });
  const signature = `${fnAbi.name}(${inputs.join(",")})`;
  const keccak256 = (0, _hash.hash256b)(signature).toString("hex");
  return keccak256.slice(0, 8);
}

function encodeArguments(args, userInput) {
  const types = [];
  const values = [];
  (args || []).forEach(arg => {
    if (arg.type === "bool") {
      types.push("uint256");
    } else {
      types.push(arg.type);
    }

    if (userInput.hasOwnProperty(arg.name)) {
      let value = userInput[arg.name];

      if (arg.type === "address") {
        value = address.fromString(value).stringEth();
      }

      values.push(value);
    } else {
      values.push("");
    }
  });

  try {
    const encoded = _ethereumjsAbi.default.rawEncode(types, values);

    return encoded.toString("hex");
  } catch (e) {
    throw new Error(`failed to rawEncode: ${e.stack}`);
  }
}

const Constructor = "constructor";
exports.Constructor = Constructor;

function encodeInputData(abiByFunc, fnName, userInput) {
  const fnAbi = abiByFunc[fnName];
  const args = getArgTypes(fnAbi);
  const header = getHeaderHash(fnAbi, args);
  const encodedArgs = encodeArguments(args, userInput);
  return `${header}${encodedArgs}`;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cmFjdC9hYmktdG8tYnl0ZS50cyJdLCJuYW1lcyI6WyJnZXRBYmlGdW5jdGlvbnMiLCJhYmkiLCJhYmlGdW5jdGlvbnMiLCJmb3JFYWNoIiwiZiIsInR5cGUiLCJuYW1lIiwiQ29uc3RydWN0b3IiLCJnZXRBcmdUeXBlcyIsImZuQWJpIiwiYXJncyIsImlucHV0cyIsImZpZWxkIiwicHVzaCIsImdldEhlYWRlckhhc2giLCJtYXAiLCJpIiwic2lnbmF0dXJlIiwiam9pbiIsImtlY2NhazI1NiIsInRvU3RyaW5nIiwic2xpY2UiLCJlbmNvZGVBcmd1bWVudHMiLCJ1c2VySW5wdXQiLCJ0eXBlcyIsInZhbHVlcyIsImFyZyIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJhZGRyZXNzIiwiZnJvbVN0cmluZyIsInN0cmluZ0V0aCIsImVuY29kZWQiLCJldGhlcmV1bWpzIiwicmF3RW5jb2RlIiwiZSIsIkVycm9yIiwic3RhY2siLCJlbmNvZGVJbnB1dERhdGEiLCJhYmlCeUZ1bmMiLCJmbk5hbWUiLCJoZWFkZXIiLCJlbmNvZGVkQXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUhBO0FBVU8sU0FBU0EsZUFBVCxDQUF5QkMsR0FBekIsRUFBcUQ7QUFDMUQsUUFBTUMsWUFBWSxHQUFJLEVBQXRCO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZQyxDQUFDLElBQUk7QUFDZixRQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxVQUFmLEVBQTJCO0FBQ3pCSCxNQUFBQSxZQUFZLENBQUNFLENBQUMsQ0FBQ0UsSUFBSCxDQUFaLEdBQXVCRixDQUF2QjtBQUNEOztBQUNELFFBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLGFBQWYsRUFBOEI7QUFDNUJILE1BQUFBLFlBQVksQ0FBQ0ssV0FBRCxDQUFaLEdBQTRCSCxDQUE1QjtBQUNEO0FBQ0YsR0FQRDtBQVNBLFNBQU9GLFlBQVA7QUFDRDs7QUFFTSxTQUFTTSxXQUFULENBQXFCQyxLQUFyQixFQUUrQjtBQUNwQyxRQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBRCxFQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYVIsT0FBYixDQUFxQlMsS0FBSyxJQUFJO0FBQzVCRixJQUFBQSxJQUFJLENBQUNHLElBQUwsQ0FBVTtBQUFFUCxNQUFBQSxJQUFJLEVBQUVNLEtBQUssQ0FBQ04sSUFBZDtBQUFvQkQsTUFBQUEsSUFBSSxFQUFFTyxLQUFLLENBQUNQO0FBQWhDLEtBQVY7QUFDRCxHQUZEO0FBR0EsU0FBT0ssSUFBUDtBQUNEOztBQUVNLFNBQVNJLGFBQVQsQ0FDTEwsS0FESyxFQUVMQyxJQUZLLEVBR0c7QUFDUixRQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0ssR0FBTCxDQUFTQyxDQUFDLElBQUk7QUFDM0IsV0FBT0EsQ0FBQyxDQUFDWCxJQUFUO0FBQ0QsR0FGYyxDQUFmO0FBR0EsUUFBTVksU0FBUyxHQUFJLEdBQUVSLEtBQUssQ0FBQ0gsSUFBSyxJQUFHSyxNQUFNLENBQUNPLElBQVAsQ0FBWSxHQUFaLENBQWlCLEdBQXBEO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLG9CQUFTRixTQUFULEVBQW9CRyxRQUFwQixDQUE2QixLQUE3QixDQUFsQjtBQUNBLFNBQU9ELFNBQVMsQ0FBQ0UsS0FBVixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFQO0FBQ0Q7O0FBRU0sU0FBU0MsZUFBVCxDQUNMWixJQURLLEVBRUxhLFNBRkssRUFHRztBQUNSLFFBQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFFQSxHQUFDZixJQUFJLElBQUksRUFBVCxFQUFhUCxPQUFiLENBQXFCdUIsR0FBRyxJQUFJO0FBQzFCLFFBQUlBLEdBQUcsQ0FBQ3JCLElBQUosS0FBYSxNQUFqQixFQUF5QjtBQUN2Qm1CLE1BQUFBLEtBQUssQ0FBQ1gsSUFBTixDQUFXLFNBQVg7QUFDRCxLQUZELE1BRU87QUFDTFcsTUFBQUEsS0FBSyxDQUFDWCxJQUFOLENBQVdhLEdBQUcsQ0FBQ3JCLElBQWY7QUFDRDs7QUFDRCxRQUFJa0IsU0FBUyxDQUFDSSxjQUFWLENBQXlCRCxHQUFHLENBQUNwQixJQUE3QixDQUFKLEVBQXdDO0FBQ3RDLFVBQUlzQixLQUFLLEdBQUdMLFNBQVMsQ0FBQ0csR0FBRyxDQUFDcEIsSUFBTCxDQUFyQjs7QUFDQSxVQUFJb0IsR0FBRyxDQUFDckIsSUFBSixLQUFhLFNBQWpCLEVBQTRCO0FBQzFCdUIsUUFBQUEsS0FBSyxHQUFHQyxPQUFPLENBQUNDLFVBQVIsQ0FBbUJGLEtBQW5CLEVBQTBCRyxTQUExQixFQUFSO0FBQ0Q7O0FBQ0ROLE1BQUFBLE1BQU0sQ0FBQ1osSUFBUCxDQUFZZSxLQUFaO0FBQ0QsS0FORCxNQU1PO0FBQ0xILE1BQUFBLE1BQU0sQ0FBQ1osSUFBUCxDQUFZLEVBQVo7QUFDRDtBQUNGLEdBZkQ7O0FBZ0JBLE1BQUk7QUFDRixVQUFNbUIsT0FBTyxHQUFHQyx1QkFBV0MsU0FBWCxDQUFxQlYsS0FBckIsRUFBNEJDLE1BQTVCLENBQWhCOztBQUNBLFdBQU9PLE9BQU8sQ0FBQ1osUUFBUixDQUFpQixLQUFqQixDQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9lLENBQVAsRUFBVTtBQUNWLFVBQU0sSUFBSUMsS0FBSixDQUFXLHdCQUF1QkQsQ0FBQyxDQUFDRSxLQUFNLEVBQTFDLENBQU47QUFDRDtBQUNGOztBQUVNLE1BQU05QixXQUFXLEdBQUcsYUFBcEI7OztBQU1BLFNBQVMrQixlQUFULENBQ0xDLFNBREssRUFFTEMsTUFGSyxFQUdMakIsU0FISyxFQUlHO0FBQ1IsUUFBTWQsS0FBSyxHQUFHOEIsU0FBUyxDQUFDQyxNQUFELENBQXZCO0FBQ0EsUUFBTTlCLElBQUksR0FBR0YsV0FBVyxDQUFDQyxLQUFELENBQXhCO0FBQ0EsUUFBTWdDLE1BQU0sR0FBRzNCLGFBQWEsQ0FBQ0wsS0FBRCxFQUFRQyxJQUFSLENBQTVCO0FBQ0EsUUFBTWdDLFdBQVcsR0FBR3BCLGVBQWUsQ0FBQ1osSUFBRCxFQUFPYSxTQUFQLENBQW5DO0FBQ0EsU0FBUSxHQUFFa0IsTUFBTyxHQUFFQyxXQUFZLEVBQS9CO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbmltcG9ydCBldGhlcmV1bWpzIGZyb20gXCJldGhlcmV1bWpzLWFiaVwiO1xuaW1wb3J0ICogYXMgYWRkcmVzcyBmcm9tIFwiLi4vY3J5cHRvL2FkZHJlc3NcIjtcbmltcG9ydCB7IGhhc2gyNTZiIH0gZnJvbSBcIi4uL2NyeXB0by9oYXNoXCI7XG5pbXBvcnQgeyBFdGhBYmlEZWNvZGVQYXJhbWV0ZXJzVHlwZSB9IGZyb20gXCIuL2FiaVwiO1xuXG5leHBvcnQgdHlwZSBBYmlCeUZ1bmMgPSB7XG4gIFtmdW5jOiBzdHJpbmddOiBhbnk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJpRnVuY3Rpb25zKGFiaTogQXJyYXk8YW55Pik6IEFiaUJ5RnVuYyB7XG4gIGNvbnN0IGFiaUZ1bmN0aW9ucyA9ICh7fSBhcyBhbnkpIGFzIEFiaUJ5RnVuYztcbiAgYWJpLmZvckVhY2goZiA9PiB7XG4gICAgaWYgKGYudHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBhYmlGdW5jdGlvbnNbZi5uYW1lXSA9IGY7XG4gICAgfVxuICAgIGlmIChmLnR5cGUgPT09IFwiY29uc3RydWN0b3JcIikge1xuICAgICAgYWJpRnVuY3Rpb25zW0NvbnN0cnVjdG9yXSA9IGY7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYWJpRnVuY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJnVHlwZXMoZm5BYmk6IHtcbiAgaW5wdXRzOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdHlwZTogc3RyaW5nIH0+O1xufSk6IEFycmF5PEV0aEFiaURlY29kZVBhcmFtZXRlcnNUeXBlPiB7XG4gIGNvbnN0IGFyZ3MgPSBbXSBhcyBBcnJheTxFdGhBYmlEZWNvZGVQYXJhbWV0ZXJzVHlwZT47XG4gIGZuQWJpLmlucHV0cy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICBhcmdzLnB1c2goeyBuYW1lOiBmaWVsZC5uYW1lLCB0eXBlOiBmaWVsZC50eXBlIH0pO1xuICB9KTtcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXJIYXNoKFxuICBmbkFiaTogYW55LFxuICBhcmdzOiBBcnJheTxFdGhBYmlEZWNvZGVQYXJhbWV0ZXJzVHlwZT5cbik6IHN0cmluZyB7XG4gIGNvbnN0IGlucHV0cyA9IGFyZ3MubWFwKGkgPT4ge1xuICAgIHJldHVybiBpLnR5cGU7XG4gIH0pO1xuICBjb25zdCBzaWduYXR1cmUgPSBgJHtmbkFiaS5uYW1lfSgke2lucHV0cy5qb2luKFwiLFwiKX0pYDtcbiAgY29uc3Qga2VjY2FrMjU2ID0gaGFzaDI1NmIoc2lnbmF0dXJlKS50b1N0cmluZyhcImhleFwiKTtcbiAgcmV0dXJuIGtlY2NhazI1Ni5zbGljZSgwLCA4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUFyZ3VtZW50cyhcbiAgYXJnczogQXJyYXk8RXRoQWJpRGVjb2RlUGFyYW1ldGVyc1R5cGU+LFxuICB1c2VySW5wdXQ6IFVzZXJJbnB1dFxuKTogc3RyaW5nIHtcbiAgY29uc3QgdHlwZXMgPSBbXSBhcyBBcnJheTxhbnk+O1xuICBjb25zdCB2YWx1ZXMgPSBbXSBhcyBBcnJheTxhbnk+O1xuXG4gIChhcmdzIHx8IFtdKS5mb3JFYWNoKGFyZyA9PiB7XG4gICAgaWYgKGFyZy50eXBlID09PSBcImJvb2xcIikge1xuICAgICAgdHlwZXMucHVzaChcInVpbnQyNTZcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVzLnB1c2goYXJnLnR5cGUpO1xuICAgIH1cbiAgICBpZiAodXNlcklucHV0Lmhhc093blByb3BlcnR5KGFyZy5uYW1lKSkge1xuICAgICAgbGV0IHZhbHVlID0gdXNlcklucHV0W2FyZy5uYW1lXTtcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gXCJhZGRyZXNzXCIpIHtcbiAgICAgICAgdmFsdWUgPSBhZGRyZXNzLmZyb21TdHJpbmcodmFsdWUpLnN0cmluZ0V0aCgpO1xuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZXMucHVzaChcIlwiKTtcbiAgICB9XG4gIH0pO1xuICB0cnkge1xuICAgIGNvbnN0IGVuY29kZWQgPSBldGhlcmV1bWpzLnJhd0VuY29kZSh0eXBlcywgdmFsdWVzKTtcbiAgICByZXR1cm4gZW5jb2RlZC50b1N0cmluZyhcImhleFwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIHJhd0VuY29kZTogJHtlLnN0YWNrfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDb25zdHJ1Y3RvciA9IFwiY29uc3RydWN0b3JcIjtcblxudHlwZSBVc2VySW5wdXQgPSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVJbnB1dERhdGEoXG4gIGFiaUJ5RnVuYzogQWJpQnlGdW5jLFxuICBmbk5hbWU6IHN0cmluZyxcbiAgdXNlcklucHV0OiBVc2VySW5wdXRcbik6IHN0cmluZyB7XG4gIGNvbnN0IGZuQWJpID0gYWJpQnlGdW5jW2ZuTmFtZV07XG4gIGNvbnN0IGFyZ3MgPSBnZXRBcmdUeXBlcyhmbkFiaSk7XG4gIGNvbnN0IGhlYWRlciA9IGdldEhlYWRlckhhc2goZm5BYmksIGFyZ3MpO1xuICBjb25zdCBlbmNvZGVkQXJncyA9IGVuY29kZUFyZ3VtZW50cyhhcmdzLCB1c2VySW5wdXQpO1xuICByZXR1cm4gYCR7aGVhZGVyfSR7ZW5jb2RlZEFyZ3N9YDtcbn1cbiJdfQ==
